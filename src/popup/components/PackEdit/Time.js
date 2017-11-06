/**
 * @fileOverview A component to change interval of the package
 * @name Time.js
 * @license GNU General Public License v3.0
 */

import React from 'react'
import PropTypes from 'prop-types'
import InputRange from 'react-input-range'
import { connect } from 'react-redux'
import { changeTimePackage } from 'actions/pack'
import { getIndexThingById } from 'reducers/stateManipulate'
import * as translator from 'shared/constants/internacionalization'

let Time = ({
  onChangeTimePackage,
	packs,
	packageid
}) => {

  const handleTimeChange = (component, value) => {
    onChangeTimePackage(value, packageid)
  }

  return (
    <section className='time-container'>

      <h2 className='time-title'>{ translator.INTERVAL_MESSAGE }</h2>
      <InputRange
        maxValue={60}
        minValue={1}
        value={packs[getIndexThingById(packs, packageid)].timeMinutes}
        onChange={handleTimeChange}
        defaultValue={5}
        labelSuffix='min'
        />
    </section>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeTimePackage: (...props) => dispatch(changeTimePackage(...props)),
  }
}

const {
  func, array, string
} = PropTypes

/**
 * PropTypes
 * @property {Function}  onChangeTimePackage  A action to change the package interval
 * @property {Array}  packs  All package availables
 * @property {String}  packageid  Id of the package to edit your interval
 */
Time.propTypes = {
  onChangeTimePackage: func.isRequired,
  packs: array.isRequired,
  packageid: string.isRequired
}

export default connect(null, mapDispatchToProps)(Time)
