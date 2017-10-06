/**
 * @fileOverview A componet to show the progress of the user
 * @name Progress.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import { connect } from 'react-redux'
import { find, propEq } from 'ramda'
import { Line } from 'rc-progress'
import { getInLocal } from 'store/LocalStore'
import {
  changePercentProgress,
  changeColorProgress,
  changePlayPack
} from 'actions/pack.js'

const Progress = ({
  onChangeColorProgress,
  onChangePercentProgress,
  onChangePlayPack,
  packageid,
  cards,
  percentage,
  colorProgress
}) => {

  const low = '#db5656'
  const middle = '#f2d368'
  const hight = '#b2da76'

  getInLocal('packsInTraning')
    .then((packsInTraning) => {
        const packWithId = find(propEq('id', packageid), packsInTraning)
        if (packWithId) {
            const sizeAccepted = cards.length - packWithId.cards.length
            const updatePercent = (sizeAccepted / cards.length) * 100
            onChangePercentProgress(updatePercent, packageid)
            if (updatePercent < 50) {
              onChangeColorProgress(low, packageid)
            } else if (updatePercent < 70) {
              onChangeColorProgress(middle, packageid)
            } else {
              onChangeColorProgress(hight, packageid)
            }
            if(percentage === 100){
              onChangePlayPack(false, packageid)
            }
        }
    })
    .catch(() => {})
  return (
    <div className={'progress-panel' + (percentage === 100 ? ' success' : '')}>
      <svg className='checkmark-icon'>
        <use xlinkHref='#icon-checkmark' />
      </svg>
      <Line percent={percentage} strokeWidth='4' strokeColor={colorProgress} />
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeColorProgress: (...props) => dispatch(changeColorProgress(...props)),
    onChangePercentProgress: (...props) => dispatch(changePercentProgress(...props)),
    onChangePlayPack: (...props) => dispatch(changePlayPack(...props))
  }
}

const {
    func, number, string, array
} = React.PropTypes

/**
 * PropTypes
 * @property {Function}  onChangeColorProgress  A action to change the color progress of the package
 * @property {Function}  onChangePercentProgress  A action to change the percent of the package
 * @property {Function}  onChangeColorProgress  A action to change the color of progress current of the package
 * @property {String}  packageid  The id of package
 * @property {Array}  cards  All cards of pack
 * @property {Number}  percentage  The current percentage
 * @property {String}  colorProgress  The color progress of the current package
 */
Progress.propTypes = {
  onChangeColorProgress: func.isRequired,
  onChangePercentProgress: func.isRequired,
  onChangePlayPack: func.isRequired,
  packageid: string.isRequired,
  cards: array.isRequired,
  percentage: number,
  colorProgress: string
}

export default connect(null, mapDispatchToProps)(Progress)
