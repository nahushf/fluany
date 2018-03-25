/**
 * @fileOverview A Tooltip component to show Front and Back questions/answers in hover
 * @name TooltipCard.js
 * @license GNU General Public License v3.0
 */

import React from 'react'
import PropTypes from 'prop-types'
import * as translator from 'shared/constants/i18n'

const TooltipCard = ({
  back,
  color,
  handleOnDelete
}) => (
  <div className={`tooltip-card color-${color}`}>
    <p className='card-item--flash'>{ translator.CARD_BACK_LABEL }</p>
    <p className='card-back'>{ back }</p>
    <p className='card-item--count card-item--edit'>Editar</p>
    <svg className='trash-icon' onClick={handleOnDelete}>
      <use xlinkHref='#icon-trash' />
    </svg>
  </div>
)

const {
  func, number, string
} = PropTypes

/**
 * PropTypes
 * @property {string}  back The back card
 * @property {Number}  color The color id of the card
 * @property {Function}  handleOnDelete The function to get changes of the card
 */
TooltipCard.propTypes = {
  back: string.isRequired,
  color: number.isRequired,
  handleOnDelete: func.isRequired
}

export default TooltipCard
