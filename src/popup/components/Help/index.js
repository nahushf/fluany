import React from 'react'
import Tooltip from 'components/Tooltip'
import * as translator from 'shared/constants/i18n'

const handleClick = () => {
  chrome.tabs.create({url: 'https://fluany.com/help'});
}

const Help = () => (
  <section className="help-content">
    <a href="#" onClick={handleClick}>?</a>
    <Tooltip name={translator.HELP_LABEL} />
  </section>
)

export default Help
