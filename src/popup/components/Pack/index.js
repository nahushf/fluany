/**
 * @fileOverview A component to show a package
 * @name index.js<Pack> * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import { connect } from 'react-redux'
import DescriptionPack from './DescriptionPack'
import Delete from './Delete'
import TitlePack from './TitlePack'
import Progress from './Progress'
import Play from 'components/Play'
import Palette from 'components/Palette'
import ExportPack from 'components/ExportPack'
import * as translator from 'shared/constants/internacionalization'
import { isEditPackage } from 'actions/flags'
import {
  changePackageTitle,
  changePackageColor,
  allNoEditingCard
} from 'actions/pack'

let Pack = ({
  onChangePackageTitle,
  onChangePackageColor,
  onAllNoEditingCard,
  onIsEditPackage,
  title,
  id,
  timeMinutes,
  playing,
  percentage,
  colorProgress,
  colorID,
  cards,
  isChangingColor
}) => {

  let inRefToTitle = ''

  const refToComponentTitle = input => {
    inRefToTitle = input
  }

  const handlePackageTitle = (e) => {
    onChangePackageTitle(id, e.target.value)
  }

  const handleClickItem = (e) => {
    e.preventDefault()
    const anyThingFocused = document.activeElement
    if ((!anyThingFocused || anyThingFocused !== inRefToTitle) && !playing) { // check if any element is focused
      onIsEditPackage({newPackage: false, packageid: id})
      onAllNoEditingCard(id)
    }
  }

  const handleOnMouseLeave = () => {
    onChangePackageColor(false, id)
  }

  const handleEditTitle = e => {
    e.stopPropagation()
    inRefToTitle.removeAttribute('disabled')
    inRefToTitle.focus()
  }

  return (
    <li>
      <a href='#'
        className={`pack-item color-${colorID}`}
        onClick={handleClickItem}
        onMouseLeave={handleOnMouseLeave}>
        <Progress
            {...{ cards,
                   colorProgress: colorProgress || '',
                   packageid: id,
                   percentage: percentage || 0 }}
        />
        <TitlePack
            {...{ title,
                   onChange: handlePackageTitle,
                   refToComponent: refToComponentTitle,
                   onFocus: 'true',
                   disabled: 'true',
                   handleEditTitle: handleEditTitle }}
        />
        <Play
            {...{ packageid: id,
                   playing,
                   title,
                   cards,
                   interval: timeMinutes,
                   percentage: percentage || 0 }}
          />
        <a className='show-pack'>{ translator.PACK_SHOW_LIST }</a>
        <ExportPack {...{ id, icon: 'pack' }} isPack />
        <Palette {...{ packageid: id, isChanging: isChangingColor }} />
        <Delete {...{ packageid: id, playing }} />
      </a>
    </li>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    onChangePackageTitle: (...props) => dispatch(changePackageTitle(...props)),
    onChangePackageColor: (...props) => dispatch(changePackageColor(...props)),
    onAllNoEditingCard: (...props) => dispatch(allNoEditingCard(...props)),
    onIsEditPackage: (...props) => dispatch(isEditPackage(...props))
  }
}

const {
    func, number, bool, string, array
} = React.PropTypes

/**
 * PropTypes
 * @property {Function}  onChangePackageTitle  A action to change the package title
 * @property {Function}  onChangePackageColor  A action to change the package color
 * @property {Function}  onAllNoEditingCard  A action to close all cards that is being edited
 * @property {Function}  onIsEditPackage  A action to change flag to editing package
 * @property {String}  title  The package title
 * @property {String}  id  The package id
 * @property {Number}  timeMinutes  The interval in minutes of the package
 * @property {Boolean}  playing  A flag to know if package is being playing
 * @property {String}  colorProgress  The package color progress
 * @property {String}  colorID  The package color in id
 * @property {Array}  cards  All cards availables to this package
 * @property {Boolean}  isChangingColor  A flag to know if the user is editing the color
 */
Pack.propTypes = {
  onChangePackageTitle: func.isRequired,
  onChangePackageColor: func.isRequired,
  onAllNoEditingCard: func.isRequired,
  onIsEditPackage: func.isRequired,
  title: string.isRequired,
  id: string.isRequired,
  timeMinutes: number,
  playing: bool,
  percentage: number,
  colorProgress: string,
  colorID: number.isRequired,
  cards: array.isRequired,
  isChangingColor: bool.isRequired
}

export default connect(null, mapDispatchToProps)(Pack)
