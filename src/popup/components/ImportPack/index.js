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
 * @param  {Function} onImportPackage  The action to import new package/packages
 * @return {Component}
 */

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
                    <img src={Icon} />
                </label>
            </a>
            <input type='file'
                    id='input-import'
                    onChange={(e) => handleOnChange(e, onImportPackage)} />
        </section>)

function mapDispatchToProps(dispatch) {
    return {
        onImportPackage: (pkg) => dispatch(importPackage(pkg))
    }
}

const {
    func
} = React.PropTypes

ImportPack.propTypes = {
    onImportPackage: func.isRequired
}

export default connect(null, mapDispatchToProps)(ImportPack)
