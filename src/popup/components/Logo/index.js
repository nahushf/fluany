/**
 * @fileOverview The logo component
 * @name index.js<Logo>
 * @license GNU General Public License v3.0
 */

import React from 'react'

const Logo = () => (
  <div className="logo-content">
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
