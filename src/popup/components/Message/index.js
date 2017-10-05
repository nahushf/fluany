/**
 * @fileOverview A component to show messages/feedback to the user
 * @name index.js<Message>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */
import React from 'react'
import { connect } from 'react-redux'
import { changeMessage } from 'actions/flags'

const Message = ({
  dispatch, message
}) => {

  const onClose = () => dispatch(changeMessage({ error: false }))

  return (
    <div className={`error-container ${(message.error ? 'error' : message.success ? 'success' : '')}`}>
      <div className='error-close' onClick={onClose} />
      <svg className='alert-icon'>
        <use xlinkHref='#icon-alert' />
      </svg>
      <p className='error-message'>{ message.info }</p>
    </div>
  )
}

const mapStateToProps = (
  state
) => ({
  message: state.flags.message
})

const {
  func, object
} = React.PropTypes

/**
 * PropTypes
 * @property {Function}  dispatch  The result from `store.dispatch()`
 * @property {Object}  message  The information of the message(if is error, success, and the message text)
 */
Message.propTypes = {
  dispatch: func.isRequired,
  message: object.isRequired
}

export default connect(mapStateToProps)(Message)
