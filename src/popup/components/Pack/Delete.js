import React from 'react'
import { removePackage } from 'actions/pack'
import * as translator from 'shared/constants/internacionalization'

/**
 * A component to delete a Pack
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {String} packageid   The package's id to remove
 * @param  {Boolean} playing   The package needs to be stopped
 * @return {Component}
 */
const Delete = ({
	dispatch,
	packageid,
  playing
}) => {
  const handleRemovePack = (e) => {
    // Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of
    // the event.
    e.stopPropagation()
    if (!playing) { dispatch(removePackage(packageid)) }
  }

  return (
    <div className='setting-trash' onClick={handleRemovePack} title={translator.PACK_DELETE_LABE}>
      <svg className='trash-icon' >
        <use xlinkHref='#icon-trash' />
      </svg>
    </div>
  )
}

const {
    func, string, bool
} = React.PropTypes

Delete.propTypes = {
    dispatch: func.isRequired,
    packageid: string.isRequired,
    playing: bool.isRequired
}

export default Delete
