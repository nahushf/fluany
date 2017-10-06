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
  changePackageDescription,
  changePackageColor,
  allNoEditingCard
} from 'actions/pack'

let Pack = ({
  dispatch,
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

  const handlePackageTitle = e => {
    dispatch(changePackageTitle(id, e.target.value))
  }

  const handleClickItem = (e) => {
    e.preventDefault()
    const anyThingFocused = document.activeElement
    if ((!anyThingFocused || anyThingFocused !== inRefToTitle) && !playing) { // check if any element is focused
      dispatch(isEditPackage({newPackage: false, packageid: id}))
      dispatch(allNoEditingCard(id))
    }
  }

  const handleOnMouseLeave = () => {
    dispatch(changePackageColor(false, id))
  }

  const handleEditTitle = e => {
    e.stopPropagation()
    inRefToTitle.removeAttribute('disabled')
    inRefToTitle.focus()
  }

  const propsDefault = {
    packageid: id,
    playing,
    dispatch
  }

  return (
    <li>
      <a href='#'
        className={'pack-item color-' + colorID}
        onClick={handleClickItem}
        onMouseLeave={handleOnMouseLeave}>
        <Progress {...propsDefault}
          colorProgress={colorProgress || ''}
          percentage={percentage || 0}
          cards={cards} />

        <TitlePack onChange={handlePackageTitle}
          refToComponent={refToComponentTitle}
          onFocus='true'
          disabled='true'
          handleEditTitle={handleEditTitle}
          title={title} />

        <Play packageid={id}
          playing={playing}
          title={title}
          cards={cards}
          percentage={percentage || 0}
          interval={timeMinutes}
          dispatch={dispatch} />
        <a className='show-pack'>{ translator.PACK_SHOW_LIST }</a>
        <ExportPack id={id} icon='pack' dispatch={dispatch} isPack />
        <Palette {...propsDefault} isChanging={isChangingColor} />
        <Delete {...propsDefault} />
      </a>
    </li>
  )
}

const {
    func, number, bool, string, array
} = React.PropTypes


/**
 * A component to see Pack information
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {String} title   The package's title
 * @param  {Number} id   The package's id to change on Store
 * @param  {Number} colorID   The package's colorid to change package to color
 * @return {Component}
 */

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
  dispatch: func.isRequired,
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

export default connect()(Pack)
