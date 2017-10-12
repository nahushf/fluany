import * as translator from 'shared/constants/internacionalization'
import { sendMessageBackground } from 'shared/helpers'
import { sendEventButton } from 'analytics/analytics'
import { initCSS } from './ElementCSS.js'

const drawElementAsk = (front, back, doSuccess, alarmName, periodInMinutes) => {
  let elementIsShowing = true
  const wrapper = document.createElement('div')
  addClass(wrapper, 'fluany-wrapper')
  initCSS(wrapper)

  const header = document.createElement('div')
  addClass(header, 'fluany-header')
  wrapper.appendChild(header)

  const logo = document.createElement('h1')
  addClass(logo, 'logo-title')
  logo.innerHTML =
      `<span class="flu">Flu</span><span class="any">any</span>`
  header.appendChild(logo)

  const close = document.createElement('a')
  addClass(close, 'fluany-close')
  header.appendChild(close)

  const contentFlu = document.createElement('div')
  addClass(contentFlu, 'fluany-content')
  wrapper.appendChild(contentFlu)

  const frontTitle = document.createElement('h2')
  addClass(frontTitle, 'fluany-front-title')
  frontTitle.textContent = front
  contentFlu.appendChild(frontTitle)

  const inputAnswer = document.createElement('input')
  addClass(inputAnswer, 'fluany-back-input')
  inputAnswer.setAttribute('placeholder', translator.CONTENT_BACK_INPUT_PLACEHOLDER)
  contentFlu.appendChild(inputAnswer)
  inputAnswer.focus()

  const buttons = document.createElement('div')
  addClass(buttons, 'fluany-buttons')
  contentFlu.appendChild(buttons)

  const emoji = document.createElement('div')
  addClass(emoji, 'emoji')
  addClass(emoji, 'neutral')
  emoji.innerHTML =
			` <span class="eyes"></span>
				<span class="mouth"></span>
			`
  contentFlu.appendChild(emoji)

  const dontKnowButton = document.createElement('a')
  addClass(dontKnowButton, 'fluany-dontknow-btn')
  dontKnowButton.textContent = translator.CONTENT_I_DONT_KNOW_BUTTON
  buttons.appendChild(dontKnowButton)

  const answerButton = document.createElement('a')
  addClass(answerButton, 'fluany-answer-btn')
  answerButton.textContent = translator.CONTENT_ANSWER_BUTTON
  buttons.appendChild(answerButton)

  const MESSAGE_TO_PLAY = { name: alarmName,
    trigger: 'createAlarm',
    periodInMinutes }
  // Events and Actions
  window.addEventListener('keydown', (event) => {
    const enterClicked = (event.which === 13 || event.keyCode === 13)
    const escapeClicked = (event.which === 27 || event.keyCode === 27)
    if (elementIsShowing) {
      if (enterClicked) {
        sendEventButton('content', 'Enter answer')
        answerButton.click()
      } else if (escapeClicked) {
        sendEventButton('content', 'Esc answer')
		    sendMessageBackground(MESSAGE_TO_PLAY)
        wrapper.outerHTML = ''
      }
    }
  })

  dontKnowButton.addEventListener('click', (e) => {
	  elementIsShowing = false
    e.preventDefault()
    addClass(wrapper, 'fadeOut')
    sendMessageBackground(MESSAGE_TO_PLAY)
  })

  close.addEventListener('click', (e) => {
    elementIsShowing = false
    e.preventDefault()
    addClass(wrapper, 'fadeOut')
    sendMessageBackground(MESSAGE_TO_PLAY)
  })

  answerButton.addEventListener('click', () => {
    elementIsShowing = false
    if (inputAnswer.value.toLowerCase() === back.toLowerCase()) {
      addClass(wrapper, 'success')
      frontTitle.textContent = translator.CONTENT_FEEDBACK_SUCCESS
      doSuccess()
    } else {
      addClass(wrapper, 'invalid')
      frontTitle.textContent = back
    }

    addClass(contentFlu, 'feedback-message')
    addClass(buttons, 'fadeOut')
    addClass(inputAnswer, 'fadeOut')
    sendMessageBackground(MESSAGE_TO_PLAY)
    setTimeout(() => {
      wrapper.style.animation = 'fadeOut 2s'
    }, 3000)
    setTimeout(() => {
      wrapper.outerHTML = ''
    }, 5000)
  })
}

// Internal helper functions
const addClass = (element, className) => {
  if (element.classList) {
    element.classList.add(className)
  } else {
    element.className += ' ' + className
  }
}

const removeClass = (element, className) => {
  if (element.classList) {
    element.classList.remove(className)
  } else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
  }
}

export default {
  drawElementAsk
}
