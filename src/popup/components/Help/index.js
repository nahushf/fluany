import React from 'react'

const handleClick = () => {
  chrome.tabs.create({url: 'https://fluany.com/help'});
}

const Help = () => (
  <section className="help-content">
    <a href="#" onClick={handleClick}>?</a>
  </section>
)

export default Help
