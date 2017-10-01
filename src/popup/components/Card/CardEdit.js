import React from 'react'
import { isEditingCard } from 'actions/pack'
import { getIndexThingById } from 'reducers/stateManipulate'
import * as translator from 'shared/constants/internacionalization'

const CardEdit = ({
    packs,
    indexOfPack,
    indexOfCard,
    packageid,
    cardEditing,
    onChangeCard
}) => {
  const handleCardFront = e => {
      onChangeCard({front: e.target.value, back: cardEditing.back})
  }

  const handleCardBack = e => {
      onChangeCard({front: cardEditing.front, back: e.target.value})
  }

  const frontValue = cardEditing.front !== null
                     ? cardEditing.front
                     : packs[indexOfPack].cards[indexOfCard].front

  const backValue = cardEditing.back !== null
                    ? cardEditing.back
                    : packs[indexOfPack].cards[indexOfCard].back

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

CardEdit.propTypes = {
  packs: array.isRequired,
  onChangeCard: func.isRequired,
  indexOfPack: number.isRequired,
  indexOfCard: number.isRequired,
  cardEditing: object.isRequired
}

export default CardEdit
