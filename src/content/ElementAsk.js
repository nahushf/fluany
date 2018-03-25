import * as translator from 'shared/constants/i18n'
import { saveInLocal } from 'store/LocalStore'
import SuccessIMG from '../assets/response_success.png'
import ErrorIMG from '../assets/response_error.png'
import Logo from '../assets/fluflu.svg'
import { sendMessageBackground, stopAlarm } from 'shared/helpers'
import { sendEventButton } from 'analytics/analytics'
import { initCSS } from './ElementCSS.js'

const drawElementAsk = (front, back, doSuccess, alarmName, periodInMinutes, nextQuestion) => {
  let elementIsShowing = true
  const wrapper = document.createElement('div')
  addClass(wrapper, 'fluany-wrapper')
  initCSS(wrapper)

  const errorIMG = document.createElement('img')
  errorIMG.src = ErrorIMG
  addClass(errorIMG, 'fluany-error-image')
  wrapper.appendChild(errorIMG)

  const successIMG = document.createElement('img')
  successIMG.src = SuccessIMG
  addClass(successIMG, 'fluany-success-image')
  wrapper.appendChild(successIMG)

  const header = document.createElement('div')
  addClass(header, 'fluany-header')
  wrapper.appendChild(header)

  const logo = document.createElement('img')
  logo.src = Logo
  addClass(logo, 'fluany-logo')
  header.appendChild(logo)

  const close = document.createElement('a')
  close.href = '#'
  addClass(close, 'fluany-close')
  header.appendChild(close)

  const contentFlu = document.createElement('div')
  addClass(contentFlu, 'fluany-content')
  wrapper.appendChild(contentFlu)

  const errorTitle = document.createElement('p')
  addClass(errorTitle, 'fluany-error-title')
  errorTitle.textContent = translator.CONTENT_THE_CORRECT_ANSWER_LABEL
  contentFlu.appendChild(errorTitle)

  const frontTitle = document.createElement('h2')
  addClass(frontTitle, 'fluany-front-title')
  frontTitle.textContent = front
  contentFlu.appendChild(frontTitle)

  const buttonNextQuestion = document.createElement('button')
  buttonNextQuestion.textContent = translator.CONTENT_NEXT_QUESTION
  addClass(buttonNextQuestion, 'fluany-nextquestion-btn')
  if(nextQuestion)
    wrapper.appendChild(buttonNextQuestion)

  const inputAnswer = document.createElement('input')
  addClass(inputAnswer, 'fluany-back-input')
  inputAnswer.setAttribute('placeholder', translator.CONTENT_BACK_INPUT_PLACEHOLDER)
  contentFlu.appendChild(inputAnswer)
  inputAnswer.focus()

  const buttons = document.createElement('div')
  addClass(buttons, 'fluany-buttons')
  contentFlu.appendChild(buttons)

  const dontKnowButton = document.createElement('button')
  addClass(dontKnowButton, 'fluany-dontknow-btn')
  dontKnowButton.textContent = translator.CONTENT_I_DONT_KNOW_BUTTON
  buttons.appendChild(dontKnowButton)

  const answerButton = document.createElement('button')
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
        saveInLocal('questionRunning', false)
      }
    }
  })

  dontKnowButton.addEventListener('click', (e) => {
	  elementIsShowing = false
    e.preventDefault()
    sendMessageBackground(MESSAGE_TO_PLAY)
    answerButton.click()
    sendEventButton('content', 'Enter I do not question')
    saveInLocal('questionRunning', false)
  })

  close.addEventListener('click', (e) => {
    elementIsShowing = false
    e.preventDefault()
    addClass(wrapper, 'fadeOut')
    sendMessageBackground(MESSAGE_TO_PLAY)
    sendEventButton('content', 'Close question')
    saveInLocal('questionRunning', false)
  })

  buttonNextQuestion.addEventListener('click', () => {
    stopAlarm(alarmName)
    nextQuestion()
    sendEventButton('content', 'Next question')
  })

  answerButton.addEventListener('click', () => {
    sendEventButton('content', 'Answering question')
    elementIsShowing = false
    if (inputAnswer.value.toLowerCase() === back.toLowerCase()) {
      addClass(wrapper, 'fluany-wrapper-success')
      frontTitle.textContent = translator.CONTENT_FEEDBACK_SUCCESS
      doSuccess()
    } else {
      addClass(wrapper, 'invalid')
      frontTitle.textContent = back
    }

    addClass(contentFlu, 'feedback-message')
    sendMessageBackground(MESSAGE_TO_PLAY)
    setTimeout(() => {
      sendMessageBackground({name: 'hideContentFluany'})
    }, 4000)
    saveInLocal('questionRunning', false)
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
