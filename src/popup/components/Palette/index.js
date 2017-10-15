/**
 * @fileOverview A component to change package color
 * @name index.js<Palette>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  changeColorID,
  changePackageColor
} from 'actions/pack'

let Palette = ({
  onChangeColorID,
  onChangePackageColor,
  packageid,
  isChanging,
  colorID
}) => {

  const handleChangeColor = (e, colorid) => {
    e.stopPropagation()
    onChangeColorID(colorid, packageid)
    onChangePackageColor(false, packageid)
  }

  const handleClickOnPalette = (e) => {
    e.stopPropagation()
    onChangePackageColor(true, packageid)
  }

  const paletteColors = () => (
    <ul>
      <li>
        <label onClick={(e) => handleChangeColor(e, 4)}
          className={`color-4 ${colorID === 4 ? 'active' : ''}`} />
      </li>
      <li>
        <label onClick={(e) => handleChangeColor(e, 2)}
          className={`color-2 ${colorID === 2 ? 'active' : ''}`} />
      </li>
      <li>
        <label onClick={(e) => handleChangeColor(e, 1)}
          className={`color-1 ${colorID === 1 ? 'active' : ''}`} />
      </li>
      <li>
        <label onClick={(e) => handleChangeColor(e, 3)}
          className={`color-3 ${colorID === 3 ? ' active' : ''}`} />
      </li>
    </ul>
    )

  return (
    <section className={`palette-color ${isChanging ? 'changing-color' : ''}`}>
      { paletteColors() }
      <svg className='brush-icon' onClick={handleClickOnPalette}>
        <use xlinkHref='#icon-brush' />
      </svg>
    </section>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeColorID: (...props) => dispatch(changeColorID(...props)),
    onChangePackageColor: (...props) => dispatch(changePackageColor(...props))
  }
}

const {
    func, number, bool
} = PropTypes

/**
 * PropTypes
 * @property {Function}  onChangeColorID  A action to change color of the package
 * @property {Function}  onChangePackageColor  A action to change the isChangingColor field in specific package is setting a package
 * @property {Boolean}  isChanging  To know if is with the pallete is open
 * @property {Number}  colorID  Current color of the package
 */
Palette.propTypes = {
  onChangeColorID: func.isRequired,
  onChangePackageColor: func.isRequired,
  isChanging: bool.isRequired,
  colorID: number
}

export default connect(null, mapDispatchToProps)(Palette)
