/**
 * @fileOverview A helper component to handler conditions
 * @name index.js<Either>
 * @license GNU General Public License v3.0
 */

import React from 'react'
import PropTypes from 'prop-types'

const Either = props => props.when ? props.right : props.left;

const {
  element, bool
} = PropTypes

/**
 * PropTypes
 * @property {Boolean}  when Condition to the handler
 * @property {Element}  left Does not display if the condition is false
 * @property {Element}  right Will show
 */
Either.propTypes = {
  when: bool.isRequired,
  left: element.isRequired,
  right: element.isRequired,
}

export default Either
