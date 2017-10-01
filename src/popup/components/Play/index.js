import React from 'react'
import { connect } from 'react-redux'
import { update, assoc } from 'ramda'
import Alarm from 'shared/Alarms'
import * as translator from 'shared/constants/internacionalization'
import { getIndexThingById } from 'reducers/stateManipulate'
import { saveInLocal, getInLocal } from 'store/LocalStore'
import { sendEventButton } from 'analytics/analytics'
import { changePlayPack,
         changePorcentProgress,
         changeColorProgress } from 'actions/pack'

let Play = ({
    packageid,
    playing,
    title,
    cards,
    dispatch,
    percentage,
    interval
}) => {
  const alarm = new Alarm('ALARM_' + packageid, interval)

  const handleClickPlay = (e) => {
    e.stopPropagation()
    if (cards.length > 0) {
      dispatch(changePlayPack(!playing, packageid))
      if (!playing) {
        sendEventButton('home', 'Play Package')
        alarm.create()
      } else {
        sendEventButton('home', 'Cancel Package')
        alarm.cancel()
      }
      if (percentage === 100 && !playing) {
        getInLocal('packsInTraning')
            .then((packsInTraning) => {
                const index = getIndexThingById(packsInTraning, packageid)
                const packsInTraningWithCardsRestarted = update(index, assoc('cards', cards, packsInTraning[index]), packsInTraning)
                saveInLocal('packsInTraning', packsInTraningWithCardsRestarted)
                dispatch(changePorcentProgress(0, packageid))
            })
      }
    }
  }

  return (
    <section className={'play-content' + (percentage < 100
                                              ? playing ? ' playing' : ''
                                              : /* otherwise */ ' restart')}
      onClick={handleClickPlay}>
      <a className={'play-btn' + (playing ? ' stop' : ' to-play')} />
      <span className='play-label'>{ percentage < 100
                                           ? playing ? translator.PACK_STOP_LABEL : translator.PACK_PLAY_LABEL
                                           : /* otherwise */ 'Recomeçar'}</span>
    </section>
  )
}

const {
    func, bool, array, number, string
} = React.PropTypes

Play.propTypes = {
  playing: bool,
  title: string,
  cards: array,
  dispatch: func,
  percentage: number,
  interval: number
}

export default connect()(Play)
