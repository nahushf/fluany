import React from 'react'
import { connect } from 'react-redux'
import { changeMessage } from 'actions/flags'

const Message = ({ dispatch, message }) => {
  const onClose = () => dispatch(changeMessage({ error: false }))

  return (
    <div className={'error-container ' + (message.error ? 'error'
                                             : message.success ? 'success' : '')}>
      <div className='error-close' onClick={onClose} />
      <svg className='alert-icon'>
        <use xlinkHref='#icon-alert' />
      </svg>
      <p className='error-message'>{message.info}</p>
    </div>
  )
}

const mapStateToProps = (
  state
) => ({
  message: state.flags.message
})

const {
  func, number, string, object
} = React.PropTypes

Message.propTypes = {
  dispatch: func.isRequired,
  message: object.isRequired
}

export default connect(mapStateToProps)(Message)
