import React from 'react'
import Logo from 'components/Logo'
import Button from 'components/Button'

import {
  WELCOME_TITLE,
  WELCOME_FIRST_FEATURE,
  WELCOME_SECOND_FEATURE
} from 'shared/constants/i18n'

const handleLogin = () => {
  chrome.tabs.create({'url': chrome.extension.getURL('../../../login/index.html')}, (tab) => {
  });
}

const Welcome = () => (
  <div className="welcome">
    <Logo />
    <h2>{ WELCOME_TITLE }</h2>
    <ul>
      <li>
        <svg className="browser-icon">
          <use xlinkHref="#people"></use>
        </svg>
        <h3>{ WELCOME_FIRST_FEATURE }</h3>
      </li>
      <li>
        <svg className="packlist-icon">
          <use xlinkHref="#pack-icon"></use>
        </svg>
        <h3>{ WELCOME_SECOND_FEATURE }</h3>
      </li>
    </ul>
    <div className="actions">
      <Button onClick={ handleLogin } bgStyle="secondary">Login</Button>
      <Button onClick={ handleLogin }>Signup</Button>
    </div>
  </div>
)

export default Welcome
