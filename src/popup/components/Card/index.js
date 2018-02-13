/**
 * @fileOverview The card component to show and edit card(Front & Back)
 * @name index.js<Card>
 * @license GNU General Public License v3.0
 */

import React from 'react'
import PropTypes from 'prop-types'
import * as translator from 'shared/constants/internacionalization'
import CardEdit from './CardEdit'
import TooltipCard from './TooltipCard'
import isEmpty from 'ramda/src/isEmpty'
import isNil from 'ramda/src/isNil'
import { connect } from 'react-redux'
import { isEditingCard, removeCard, allNoEditingCard } from 'actions/pack'
import { changeCard } from 'actions/flags'
import { getIndexThingById } from 'reducers/stateManipulate'
import { getInLocal } from 'store/LocalStore'

export const Card = ({
  onChangeCard,
  onAllNoEditingCard,
  onEditingCard,
  onRemoveCard,
  packs,
  card,
  indexOfPack,
  packageid,
  cardEditing
}) => {

  let listItem = ''
  const indexOfCard = getIndexThingById(packs[indexOfPack].cards, card.id)
  const handleClickCard = (e) => {
    onAllNoEditingCard(packageid)
    listItem.style.transform = `translateX(-${listItem.getBoundingClientRect().left - 25}px)`
    onEditingCard(!card.isEditing, 'isEditing', packageid, indexOfCard)
    onChangeCard({front: null, back: null})
  }

  const handleRemoveCard = (e) => {
    e.stopPropagation()
    onRemoveCard(packageid, indexOfCard)
  }

  const handleSaveCard = (e) => {
    e.stopPropagation()
    // if is empty, you don't save it :(
    if ((isEmpty(cardEditing.front) || isEmpty(cardEditing.back)) ||
        (card.isCreating && isNil(cardEditing.front) && isNil(cardEditing.back))) {
      return
    }

    if (!isNil(cardEditing.front)) {
      onEditingCard(cardEditing.front, 'front', packageid, indexOfCard)
    }

    if (!isNil(cardEditing.back)) {
      onEditingCard(cardEditing.back, 'back', packageid, indexOfCard)
    }

    handleClickCard()

    getInLocal('openInPackage').then(data => {
      // when is clicked in save when is selected text, close window to continue the navigation
      setTimeout(() => {
        window.close()
      }, 1500)
    })
  }

  const handleCancelCard = (e) => {
    handleClickCard()
    if (card.isCreating && isEmpty(card.front) && isEmpty(card.back)) {
      onRemoveCard(packageid, indexOfCard)
      onEditingCard(false, 'isCreating', packageid, indexOfCard)
    }
  }

  const cardEditProps = {
    packs,
    indexOfPack,
    indexOfCard,
    packageid,
    cardEditing,
    onChangeCard
  }

  return (
    <li className={`card-item ${card.isEditing ? 'isEditing' : 'no-editing'}`}
        ref={(e) => { listItem = e }}>
      <a href="#" onClick={handleClickCard}>
        <CardEdit {...cardEditProps} />
        <div className={`card-item-block color-${card.colorID}`}>
          <button className='btn-delete' onClick={handleCancelCard}>
            <span>{translator.CARD_CANCEL}</span>
          </button>
          <button className='btn-save' onClick={handleSaveCard}>
            <svg className='save-icon'>
              <use xlinkHref='#icon-correct' />
            </svg>
            <span>{translator.CARD_SAVE}</span>
          </button>
          <TooltipCard handleOnDelete={handleRemoveCard} color={card.colorID} back={card.back} />
          <p className='card-item--flash card-item--count'>{translator.CARD_FRONT_LABEL}</p>
          <p className='card-item--count'>{ card.front }</p>
        </div>
      </a>
    </li>
  )
}

const mapStateToProps = (
    state
) => {
  return {
    cardEditing: state.flags.cardEditing
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCard: (c) => dispatch(changeCard(c)),
    onAllNoEditingCard: (packid) => dispatch(allNoEditingCard(packid)),
    onEditingCard: (...props) => dispatch(isEditingCard(...props)),
    onRemoveCard: (...props) => dispatch(removeCard(...props))
  }
}

const {
  func, number, array, object
} = PropTypes

/**
 * PropTypes
 * @property {Function}  onChangeCard  A function to handler the changes of the card
 * @property {Function}  onAllNoEditingCard  A action to close all cards that is being edited
 * @property {Function}  onEditingCard  A action to change a prop in card object (front, back, isEditing, etc)
 * @property {Function}  onRemoveCard  A action to remove a specific card
 * @property {Object}  card  All cards of specific package
 * @property {Array}  packs  All packages in store
 * @property {Number}  indexOfPack  The package position(index)
 * @property {Object}  cardEditing  The object of the card is being changed
 */
Card.propTypes = {
  onChangeCard: func.isRequired,
  onAllNoEditingCard: func.isRequired,
  onEditingCard: func.isRequired,
  onRemoveCard: func.isRequired,
  card: object.isRequired,
  packs: array.isRequired,
  indexOfPack: number.isRequired,
  cardEditing: object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
