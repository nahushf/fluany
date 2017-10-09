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
  onChangeMessage,
  message
}) => {

  const onClose = () => onChangeMessage({ error: false, success: false })

  return (
    <div className={`error-container ${(message.error ? 'error' : message.success ? 'success' : '')}`}>
      <div className='error-close' onClick={onClose} />
      <svg className='alert-icon'>
        <use xlinkHref={message.error ? '#icon-alert' : '#icon-smiley'} />
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

function mapDispatchToProps(dispatch) {
  return {
    onChangeMessage: (message) => dispatch(changeMessage(message)),
  }
}

const {
  func, object
} = React.PropTypes

/**
 * PropTypes
 * @property {Function}  onChangeMessage  A function to dispatch action to show message
 * @property {Object}  message  The information of the message(if is error, success, and the message text)
 */
Message.propTypes = {
  onChangeMessage: func.isRequired,
  message: object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
