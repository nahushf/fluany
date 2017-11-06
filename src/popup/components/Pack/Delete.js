/**
 * @fileOverview A component to delete a pack
 * @name Delete.js
 * @license GNU General Public License v3.0
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removePackage } from 'actions/pack'
import { changeMessage } from 'actions/flags'
import * as translator from 'shared/constants/internacionalization'

export const Delete = ({
  onRemovePackage,
  onChangeMessage,
	packageid,
  playing
}) => {

  const handleRemovePack = (e) => {
    e.stopPropagation()
    if (playing) {
      onChangeMessage({
        error: true,
        info: translator.MESSAGE_ERROR_DELETE_PACKAGE
      })
    } else {
      onRemovePackage(packageid)
    }
  }

  return (
    <div className='setting-trash' onClick={handleRemovePack} title={translator.PACK_DELETE_LABE}>
      <svg className='trash-icon' >
        <use xlinkHref='#icon-trash' />
      </svg>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onRemovePackage: (packageid) => dispatch(removePackage(packageid)),
    onChangeMessage: (message) => dispatch(changeMessage(message))
  }
}

const {
    func, string, bool
} = PropTypes

/**
 * PropTypes
 * @property {Function}  onRemovePackage  A action to remove a specific package
 * @property {Function}  onChangeMessage  A action to show message/feedback
 * @property {String}  packageid  The package's id to remove
 * @property {Boolean}  playing  The package needs to be stopped
 */
Delete.propTypes = {
  onRemovePackage: func.isRequired,
  onChangeMessage: func.isRequired,
  packageid: string.isRequired,
  playing: bool.isRequired
}

export default connect(null, mapDispatchToProps)(Delete)
