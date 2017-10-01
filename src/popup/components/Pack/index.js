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
import { changePackageTitle,
         changePackageDescription,
         changePackageColor,
         allNoEditingCard } from 'actions/pack'

/**
 * A component to see Pack information
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {String} title   The package's title
 * @param  {Number} id   The package's id to change on Store
 * @param  {Number} colorID   The package's colorid to change package to color
 * @return {Component}
 */

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
    isSetting }) => {
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

Pack.propTypes = {
  dispatch: func.isRequired,
  title: string.isRequired,
  timeMinutes: number.isRequired,
  percentage: number,
  colorProgress: string,
  colorID: number.isRequired,
  cards: array.isRequired,
  isChangingColor: bool.isRequired
}

export default connect()(Pack)
