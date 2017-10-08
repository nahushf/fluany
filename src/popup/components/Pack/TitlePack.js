/**
 * @fileOverview A component to show and change a Package title
 * @name TitlePack.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */
import React from 'react'
import * as translator from 'shared/constants/internacionalization'

/**
 * A component to see/edit package's title
 *
 * @param  {Function} onChange   A function to receive value when change textarea;
 * @param  {String}   title   The package title
 * @return {Component}
 */

let elementTitle = ''
const TitlePack = ({
    onChange,
    title,
    disabled,
    tabIndex,
    refToComponent,
    handleEditTitle
}) => {
  const handleRefElement = (element) => {
    refToComponent(element)
    elementTitle = element
  }

  const handleOnChange = (e) => {
    onChange(e)
  }

  return (
    <div className='title-package--container'>
      <textarea
        className='input-title-package'
        type='text'
        onChange={handleOnChange}
        spellCheck='false'
        maxLength='40'
        disabled={disabled}
        autoCorrect='false'
        tabIndex={tabIndex}
        ref={handleRefElement}
        placeholder={translator.PACK_TITLE_PLACEHOLDER}
        value={title} />
      <div className='title-edit-icon' onClick={handleEditTitle} title={translator.PACK_TITLE_PLACEHOLDER}>
        <svg className='edit-icon'>
          <use xlinkHref='#icon-edit' />
        </svg>
      </div>
    </div>
  )
}

const {
  func, string, bool
} = React.PropTypes

/**
 * PropTypes
 * @property {Function}  onChange  A function to receive value when change textarea
 * @property {String}  title  The pack title
 * @property {String}  disabled  To the be disabled
 * @property {String}  tabIndex  Number of tabIndex
 * @property {String}  refToComponent  To get the ref of the element
 * @property {String}  title  The pack title
 * @property {String}  handleEditTitle  A function to give focus when is clicked in edit icon
 */
TitlePack.propTypes = {
  onChange: func.isRequired,
  title: string.isRequired,
  disabled: string,
  tabIndex: string,
  refToComponent: func,
  handleEditTitle: func
}

export default TitlePack
