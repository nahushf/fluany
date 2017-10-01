import React from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import { assoc, compose, merge } from 'ramda'
import { importPackage } from 'actions/pack'
import { getIndexThingById } from 'reducers/stateManipulate'
import * as translator from 'shared/constants/internacionalization'
import { settingNewPack } from 'shared/helpers.js'
import { sendEventButton } from 'analytics/analytics'
import Icon from './import-icon.png'

/**
 * A component to import pack
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @return {Component}
 */

let ImportPack = ({
    dispatch }) => {
  const onReaderLoad = event => {
    const packLoaded = JSON.parse(event.target.result)
    const packages = packLoaded.map(settingNewPack)
    dispatch(importPackage(packages))
  }

  const handleOnChange = (e) => {
    sendEventButton('home', 'Import Package')
    const reader = new FileReader()
    reader.onload = onReaderLoad
    reader.readAsText(e.target.files[0])
  }

  return (
    <section className='importPack'>
      <a href='#'>
        <label htmlFor='input-import'>
          <img src={Icon} />
        </label>
      </a>
      <input type='file' id='input-import' onChange={handleOnChange} />
    </section>
  )
}

const {
    func
} = React.PropTypes

ImportPack.propTypes = {
  dispatch: func.isRequired
}

export default ImportPack
