/**
 * @fileOverview
 * @name index.js<LoadPacks>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import uuid from 'uuid/v4'
import 'babel-polyfill'
import { connect } from 'react-redux'
import { getInLocal } from 'store/LocalStore'
import { editPackageLoading, isEditPackage } from 'actions/flags'
import { loadPackLocal, createCard } from 'actions/pack'

const LoadPacks = ({
  onLoadPackLocal,
  onPackageLoad,
  onEditPackage,
  onCreateCard,
}) => {
  const aNewCardToTheSelected = (id) => {
    return getInLocal('openNewCard').then((selected) => {
      const newCard = {
        id: uuid(),
        isEditing: false,
        front: selected,
        back: ''
      }
      onEditPackage({
        newPackage: false,
        packageid: id
      })
      onCreateCard(id, newCard.id, newCard)
      setTimeout(() => {
        document.querySelector('ul.card-content li:nth-child(2) .card-item-block').click()
        onPackageLoad(false)
      }, 100)
    })
  }

  getInLocal('packState')
    .then((packState) => {
      onLoadPackLocal(packState)
      return getInLocal('openInPackage').then(aNewCardToTheSelected)
    })
    .catch((error) => {})
  return null
}

function mapDispatchToProps(dispatch) {
  return {
    onEditPackage: (pkg) => dispatch(isEditPackage(pkg)),
    onLoadPackLocal: (pkg) => dispatch(loadPackLocal(pkg)),
    onPackageLoad: (bool) => dispatch(editPackageLoading(bool)),
    onCreateCard: (...props) => dispatch(createCard(...props))
  }
}

const {
    func
} = React.PropTypes

/**
 * PropTypes
 * @property {Function}  onLoadPackLocal A action to the store the new packs state(get localstorage and update store)
 * @property {Function}  onPackageLoad A action to know if is loading or not
 * @property {Function}  onCreateCard A action to create a new card (for the text selected)
 * @property {Function}  onEditPackage A action to save if the current package is loading and save values
 */
LoadPacks.propTypes = {
  onLoadPackLocal: func.isRequired,
  onPackageLoad: func.isRequired,
  onEditPackage: func.isRequired,
  onCreateCard: func.isRequired
}

export default connect(null, mapDispatchToProps)(LoadPacks)
