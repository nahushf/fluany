/**
 * @fileOverview A component to create a new Pack
 * @name Create.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import { addPackage } from 'actions/pack'
import { newPackage, isEditPackage, changeMessage } from 'actions/flags'
import { sendMessageBackground } from 'shared/helpers.js'
import { sendEventButton } from 'analytics/analytics'
import * as translator from 'shared/constants/internacionalization'

let Create = ({
    onChangeMessage,
    onEditPackage,
    onAddPackage,
    onNewPackage,
    titleEdited,
}) => {

  const handleInputNewPackage = (e) => onNewPackage({ title: e.target.value })

  const handleClickCreate = (e) => {
    e.preventDefault()
    sendEventButton('home', 'Create Package')
    const newPackageId = uuid()
    if (titleEdited === '') {
      onChangeMessage({
        error: true,
        info: translator.MESSAGE_ERROR_CREATE_PACKAGE
      })
    } else {
      onChangeMessage({
        error: false,
        success: false,
        info: ''
      })
      onEditPackage({ newPackage: true, packageid: newPackageId })
      onAddPackage({ id: newPackageId, title: titleEdited })
      onNewPackage({ title: '', description: '' })
      sendMessageBackground({
        name: 'updateContextAddPackages',
        trigger: { title: titleEdited, id: newPackageId }
      })
    }
  }

  const Creating = () => (
    <div className='pack-item--creating'>
      <p className='pack-item--title'>{ translator.PACK_CRETE_TITLE }</p>
      <form onSubmit={handleClickCreate}>
        <input className='pack-item--input'
          name='newpack'
          type='text'
          tabIndex='1'
          onChange={handleInputNewPackage}
          placeholder={translator.PACK_CREATE_PLACEHOLDER} />
      </form>

      <div className='new-pack--buttons'>
        <button className='btn btn-create'
          tabIndex='2'
          onClick={handleClickCreate}>{ translator.PACK_CREATE_BUTTON }</button>
      </div>
    </div>
    )

  return (
    <li key='0' className='pack-item pack-item--new'>
      { Creating() }
    </li>
  )
}

const mapStateToProps = (
  state
) => ({
  titleEdited: state.flags.newPackage.title
})

function mapDispatchToProps(dispatch) {
  return {
    onChangeMessage: (message) => dispatch(changeMessage(message)),
    onEditPackage: (pkg) => dispatch(isEditPackage(pkg)),
    onAddPackage: (pkg) => dispatch(addPackage(pkg)),
    onNewPackage: (pkg) => dispatch(newPackage(pkg)),
  }
}

const {
    func, string
} = React.PropTypes

/**
 * PropTypes
 * @property {Function}  onChangeMessage  A function to dispatch action to show messag
 * @property {Function}  onEditPackage  A function to dispatch action to edit packag
 * @property {Function}  onAddPackage  A function to dispatch action to add package in flags store
 * @property {Function}  onNewPackage  A function to dispatch action to add package in packs store
 * @property {String}  titleEdited  The title that the user have been written
 */
Create.propTypes = {
  onChangeMessage: func.isRequired,
  onEditPackage: func.isRequired,
  onAddPackage: func.isRequired,
  onNewPackage: func.isRequired,
  titleEdited: string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)

