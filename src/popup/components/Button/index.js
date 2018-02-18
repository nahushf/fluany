/**
 * @fileOverview The component width all Buttons
 * @name index.js<Button>
 * @license GNU General Public License v3.0
 */

import React from 'react'

const Button = ({ children, bgStyle }) => (
  <button className={`bgbtn ${bgStyle}`}>
    { children }
  </button>
)

export default Button
