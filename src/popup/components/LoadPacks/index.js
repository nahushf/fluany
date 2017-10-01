import React from 'react'
import { connect } from 'react-redux'
import 'babel-polyfill'
import { loadPackLocal, createCard } from 'popup/actions/pack'
import { editPackageLoading } from 'actions/flags'
import { getIndexThingById } from 'reducers/stateManipulate'
import { isEditPackage } from 'actions/flags'
import { getInLocal } from 'store/LocalStore'

const LoadPacks = ({
  onLoadPackLocal,
  onPackageLoad,
  onEditPackage,
  onCreateCard,
}) => {
  (async function contextMenusWindow () {
    const packState = await getInLocal('packState')
    if (packState) {
      onLoadPackLocal(packState)
      const id = await getInLocal('openInPackage')
      if (id) {
        onPackageLoad(true)
        onEditPackage({newPackage: false, packageid: id})
        const indexOfThePack = getIndexThingById(packState, id)
        const cardsOfThePack = packState[indexOfThePack].cards
        const idNewCard = cardsOfThePack.length
        const selected = await getInLocal('openNewCard')
        if (selected) {
          const newCard = {id: idNewCard, isEditing: false, front: selected, back: ''}
          onCreateCard(id, packState.length, newCard)
                    // Effect to open card created
          setTimeout(() => {
            document.querySelector('ul.card-content li:nth-child(2) .card-item-block').click()
            onPackageLoad(false)
          }, 100)
        }
      }
    }
  })()

  return null
}

function mapDispatchToProps(dispatch) {
  return {
    onEditPackage: (pkg) => dispatch(isEditPackage(pkg)),
    onLoadPackLocal: (pkg) => dispatch(loadPackLocal(pkg)),
    onPackageLoad: (bool) => dispatch(editPackageLoading(bool)),
    onCreateCard: (...props) => dispatch(editPackageLoading(...props))
  }
}

const {
    func
} = React.PropTypes

LoadPacks.propTypes = {
    onLoadPackLocal: func.isRequired,
    onPackageLoad: func.isRequired,
    onEditPackage: func.isRequired,
    onCreateCard: func.isRequired
}

export default connect(null, mapDispatchToProps)(LoadPacks)
