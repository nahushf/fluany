/**
 * @fileOverview A component to create a link to create a new Card
 * @name CreateCard.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import uuid from 'uuid/v4'
import * as translator from 'shared/constants/internacionalization'
import { connect } from 'react-redux'
import { createCard, isEditingCard } from 'actions/pack'
import { getIndexThingById } from 'reducers/stateManipulate'

let CreateCard = ({
  dispatch,
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
    dispatch(createCard(packageid, idNewCard, newCard))
    // Effect to open the card created
    setTimeout(() => {
      document.querySelector('ul.card-content li:nth-child(2) .card-item-block').click()
    }, 100)
  }

  return (
    <li key='0'
        className={'card-item ' + (packs[indexOfPack].cards.length > 0 ? 'card-item--new' : 'card-item--new')}
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

const mapStateToProps = (
  state
) => {
  return {
    packs: state.packs
  }
}

const {
  func, number, array
} = React.PropTypes

/**
 * PropTypes
 * @property {Function} dispatch The result from `store.dispatch()`
 * @property {Number} indexOfPack The index of pack to change
 * @property {Array} packs All the packs availables
 */
CreateCard.propTypes = {
  dispatch: func.isRequired,
  indexOfPack: number.isRequired,
  packs: array.isRequired
}

export default connect(mapStateToProps)(CreateCard)
