/**
 * @fileOverview The component to edit a card (Back and front)
 * @name CardEdit.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import * as translator from 'shared/constants/internacionalization'
import { isEditingCard } from 'actions/pack'
import { getIndexThingById } from 'reducers/stateManipulate'

const CardEdit = ({
  packs,
  indexOfPack,
  indexOfCard,
  packageid,
  cardEditing,
  onChangeCard
}) => {

  const handleCardFront = e => onChangeCard({
    front: e.target.value,
    back: cardEditing.back
  })

  const handleCardBack = e => onChangeCard({
    front: cardEditing.front,
    back: e.target.value
  })

  const frontValue = cardEditing.front !== null ?
    cardEditing.front :
    packs[indexOfPack].cards[indexOfCard].front

  const backValue = cardEditing.back !== null ?
    cardEditing.back :
    packs[indexOfPack].cards[indexOfCard].back

  return (
    <div className='card-edit-container'>
      <div className='card-edit-content'>
        <p>{ translator.CARD_FRONT_LABEL }</p>
        <input value={frontValue}
          onChange={handleCardFront}
          placeholder={translator.CARD_PLACE_FRONT} />
      </div>

      <div className='card-edit-content'>
        <p>{ translator.CARD_BACK_LABEL }</p>
        <input value={backValue}
          onChange={handleCardBack}
          placeholder={translator.CARD_PLACE_BACK} />
      </div>
    </div>
  )
}

const {
  func, number, array, object
} = React.PropTypes

/**
 * PropTypes
 * @property {Array} packs All the packs availables
 * @property {Function} onChangeCard Function to call when the inputs is changed
 * @property {Number} indexOfPack The index of pack to change
 * @property {Number} indexOfCard The index of card to change
 * @property {Object} cardEditing The object of the card is being changed
 */
CardEdit.propTypes = {
  packs: array.isRequired,
  onChangeCard: func.isRequired,
  indexOfPack: number.isRequired,
  indexOfCard: number.isRequired,
  cardEditing: object.isRequired
}

export default CardEdit
