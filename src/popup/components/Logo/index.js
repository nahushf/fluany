/**
 * @fileOverview The logo component
 * @name index.js<Logo>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'

const Logo = () => (
  <div>
    <svg className='octopus-logo' >
      <use xlinkHref='#octopus' />
    </svg>
    <h1 className='logo-title'>
      <span className='flu'>flu</span>
      <span className='any'>any</span>
    </h1>
  </div>
)

export default Logo
