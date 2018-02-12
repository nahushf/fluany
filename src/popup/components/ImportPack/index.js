/**
 * @fileOverview The component to import a new package or packages
 * @name index.js<ImportPack>
 * @license GNU General Public License v3.0
 */

import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { importPackage } from 'actions/pack'
import { settingNewPack } from 'shared/helpers.js'
import { sendEventButton } from 'analytics/analytics'
import Tooltip from 'components/Tooltip'
import * as translator from 'shared/constants/internacionalization'

function onReaderLoad(event, onImportPackage) {
  const packLoaded = JSON.parse(event.target.result)
  const packages = packLoaded.map(settingNewPack)
  onImportPackage(packages)
}

function handleOnChange(e, onImportPackage) {
  sendEventButton('home', 'Import Package')
  const reader = new FileReader()
  reader.onload = (e) => onReaderLoad(e, onImportPackage)
  reader.readAsText(e.target.files[0])
}

let ImportPack = ({
  onImportPackage
}) => (<section className='importPack'>
          <a href='#'>
            <label htmlFor='input-import'>
              <svg className='import-icon'>
                <use xlinkHref='#icon-import' />
              </svg>
            </label>
          </a>
          <input type='file'
                  id='input-import'
                  onChange={(e) =>
                            handleOnChange(e, onImportPackage)} />
          <Tooltip name={translator.IMPORT_LABEL} />
        </section>)

function mapDispatchToProps(dispatch) {
  return {
    onImportPackage: (pkg) => dispatch(importPackage(pkg))
  }
}

const {
  func
} = PropTypes

/**
 * PropTypes
 * @property {Function}  onImportPackage A action to import a new package
 */
ImportPack.propTypes = {
  onImportPackage: func.isRequired
}

export default connect(null, mapDispatchToProps)(ImportPack)
