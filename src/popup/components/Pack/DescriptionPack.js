/**
 * @fileOverview A component to show and change package description
 * @name DescriptionPack.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import * as translator from 'shared/constants/internacionalization'

const DescriptionPack = ({
  onChange,
  description
}) => (
  <div className='description-package--container'>
    <textarea
      className='input-description-package'
      type='text'
      onChange={onChange}
      value={description}
      spellCheck='false'
      maxLength='82'
      placeholder={translator.PACK_DESCRIPTION_PLACEHOLDER}
      autoCorrect='false' />
    <div className='description-edit-icon'>
      <svg className='edit-icon'>
        <use xlinkHref='#icon-edit' />
      </svg>
    </div>
  </div>
)

const {
  func, string
} = React.PropTypes

/**
 * PropTypes
 * @property {Function}  onChange  A function to receive value when change textarea
 * @property {String}  description  The pack description
 */
DescriptionPack.propTypes = {
  onChange: func.isRequired,
  description: string.isRequired
}

export default DescriptionPack
