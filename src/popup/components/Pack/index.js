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
import Setting from 'components/Setting'
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
  isChangingColor,
  isSetting
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
          colorProgress={colorProgress || ''}
          packageid={id}
          percentage={percentage || 0}
          cards={cards} />
      <TitlePack
          onChange={handlePackageTitle}
          refToComponent={refToComponentTitle}
          onFocus='true'
          disabled='true'
          handleEditTitle={handleEditTitle}
          title={title} />
      <Play
          packageid={id}
          playing={playing}
          title={title}
          cards={cards}
          percentage={percentage || 0}
          interval={timeMinutes}/>
        <a className='show-pack'>{ translator.PACK_SHOW_LIST }</a>
        <ExportPack id={id} icon='pack' isPack />
        <Palette packageid={id} isChanging={isChangingColor} />
        <Delete packageid={id} playing={playing} />
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
 * @property {Function}  onChangeCard  A function to handler the changes of the card
 * @property {String}  onAllNoEditingCard  A action to close all cards that is being edited
 * @property {Function}  onEditingCard  A action to change a prop in card object (front, back, isEditing, etc)
 * @property {Function}  onRemoveCard  A action to remove a specific card
 * @property {Object}  card  All cards of specific package
 * @property {Array}  packs  All packages in store
 * @property {Number}  indexOfPack  The package position(index)
 * @property {Object}  cardEditing  The object of the card is being changed
 */
Pack.propTypes = {
  title: string.isRequired,
  id: string.isRequired,
  timeMinutes: number.isRequired,
  playing: bool.isRequired,
  percentage: number,
  colorProgress: string,
  colorID: number.isRequired,
  cards: array.isRequired,
  isChangingColor: bool.isRequired,
  isSetting: bool.isRequired
}

export default connect(null, mapDispatchToProps)(Pack)
