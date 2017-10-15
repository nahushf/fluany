/**
 * @fileOverview A component to create a link to create a new Card
 * @name CreateCard.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'
import * as translator from 'shared/constants/internacionalization'
import { connect } from 'react-redux'
import { createCard, isEditingCard } from 'actions/pack'
import { getIndexThingById } from 'reducers/stateManipulate'

export const CreateCard = ({
  onCreateCard,
  packageid,
  indexOfPack,
  packs
}) => {
  const handleCreateCard = () => {
    const idNewCard = uuid()
    const newCard = {
      id: idNewCard,
      isEditing: false,
      front: '',
      back: '',
      isCreating: true
    }
    onCreateCard(packageid, idNewCard, newCard)
    setTimeout(() => {
      document.querySelector('ul.card-content li:nth-child(2) .card-item-block').click()
    }, 100)
  }

  return (
    <li key='0'
        className={`card-item  ${(packs[indexOfPack].cards.length > 0 ? 'card-item--new' : 'card-item--new')}`}
        onClick={handleCreateCard}>
      <a href='#'>
        <div className='card-item-block'>
          <p className='card-item--more'>+</p>
          <p className='item-more-message'>{ translator.CARD_NEW_LABEL }</p>
        </div>
      </a>
    </li>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onCreateCard: (...props) => dispatch(createCard(...props)),
  }
}

const {
  func, number, array
} = PropTypes

/**
 * PropTypes
 * @property {Function} onCreateCard A action to show inputs(front & back) to create a new card
 * @property {Number} indexOfPack The index of pack to change
 * @property {Array} packs All the packs availables
 */
CreateCard.propTypes = {
  onCreateCard: func.isRequired,
  indexOfPack: number.isRequired,
  packs: array.isRequired
}

  export default connect(null, mapDispatchToProps)(CreateCard)
