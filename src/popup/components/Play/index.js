/**
 * @fileOverview A component to start and stop training
 * @name index.js<Play>
 * @license GNU General Public License v3.0
 */

import React from 'react'
import PropTypes from 'prop-types'
import Remember from 'remember.chrome'
import { connect } from 'react-redux'
import update from 'ramda/src/update'
import assoc from 'ramda/src/assoc'
import Alarm from 'shared/Alarms'
import * as translator from 'shared/constants/i18n'
import { getIndexThingById } from 'reducers/stateManipulate'
import { saveInLocal, getInLocal } from 'store/LocalStore'
import { sendEventButton } from 'analytics/analytics'
import { changeMessage } from 'actions/flags'
import {
  changePlayPack,
  changePorcentProgress,
} from 'actions/pack'

let Play = ({
  onChangeMessage,
  onChangePlayPack,
  onChangePorcentProgress,
  packageid,
  playing,
  title,
  cards,
  percentage,
  interval
}) => {

  const alarm = Remember({
    name: `ALARM_${packageid}`,
    delayInMinutes: 1,
    periodInMinutes: interval
  })

  const handleClickPlay = (e) => {
    e.stopPropagation()
    if (cards.length > 0) {
      onChangePlayPack(!playing, packageid)
      onChangeMessage({
        success: false,
        error: false,
        info: translator.MESSAGE_SUCCESS_AFTER_PLAY
      })
      if (!playing) {
        onChangeMessage({
          success: true,
          info: translator.MESSAGE_SUCCESS_AFTER_PLAY
        })
        sendEventButton('home', 'Play Package')
        alarm.create()
      } else {
        sendEventButton('home', 'Cancel Package')
        saveInLocal('questionRunning', false)
        alarm.stop()
      }

      if (percentage === 100 && !playing) {
        getInLocal('packsInTraning')
          .then((packsInTraning) => {
            const index = getIndexThingById(packsInTraning, packageid)
              const packsInTraningWithCardsRestarted = update(index, assoc('cards', cards, packsInTraning[index]), packsInTraning)
              saveInLocal('packsInTraning', packsInTraningWithCardsRestarted)
              onChangePorcentProgress(0, packageid)
          })
      }
    }else{
      onChangeMessage({
        error: true,
        info: translator.MESSAGE_ERROR_EMPTY_PACKAGE
      })
    }
  }

  return (
      <section className={`play-content ${percentage < 100 ? playing ? 'playing' : '' : 'restart'}`}
               onClick={handleClickPlay}>
          <a className={`play-btn ${playing ? 'stop' : 'to-play'}`} />
          <span className='play-label'>{ percentage < 100
                                      ? playing ? translator.PACK_STOP_LABEL : translator.PACK_PLAY_LABEL
                                      : /* otherwise */ translator.PACK_RESTART_LABEL }</span>

      </section>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeMessage: (...props) => dispatch(changeMessage(...props)),
    onChangePlayPack: (...props) => dispatch(changePlayPack(...props)),
    onChangePorcentProgress: (...props) => dispatch(changePorcentProgress(...props))
  }
}

const {
    func, bool, array, number, string
} = PropTypes

/**
 * PropTypes
 * @property {Function}  onChangeMessage  A action to show message/feedback
 * @property {Function}  onChangePlayPack  A action to change status play of the package
 * @property {Function}  onChangePercentProgress  A action to change the percent of the package
 * @property {String}  packageid  The id of package
 * @property {Boolean}  playing  The package needs to be stopped
 * @property {String}  title  The package title
 * @property {Array}  cards  All cards availables in package
 * @property {Number}  percentage  The current percentage
 * @property {Number}  interval  The current interval of the package (to show questions)
 */
Play.propTypes = {
  onChangeMessage: func.isRequired,
  onChangePlayPack: func.isRequired,
  onChangePorcentProgress: func.isRequired,
  packageid: string.isRequired,
  playing: bool,
  title: string,
  cards: array,
  percentage: number,
  interval: number
}

export default connect(null, mapDispatchToProps)(Play)
