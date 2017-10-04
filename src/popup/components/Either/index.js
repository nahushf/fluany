/**
 * @fileOverview A helper component to handler conditions
 * @name index.js<Either>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */
import React from 'react'

const Either = props => props.when ? props.right : props.left;

const {
  element, bool
} = React.PropTypes

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
