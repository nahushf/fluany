import React from 'react'
import { connect } from 'react-redux'
import ImportPack from 'components/ImportPack'
import ExportPack from 'components/ExportPack'
import { menuToggle } from 'actions/flags'

let Menu = ({
  dispatch,
  packs,
  active
}) => {
  const handleClick = () => {
    dispatch(menuToggle(!active))
  }

  return (
    <section className={'menu-container ' + (active ? 'active' : '')} onClick={handleClick}>
      <svg className='menu-icon'>
        <use xlinkHref='#icon-menu' />
      </svg>
      <ul className='menu-list'>
        <li>
          <ImportPack dispatch={dispatch} />
          <label>Import pack</label>
        </li>
        <li>
          <ExportPack />
          <label>Export all pack</label>
        </li>
      </ul>
    </section>
  )
}

const mapStateToProps = (
  state
) => {
  return {
    packs: state.packs,
    active: state.flags.menuToggle
  }
}

const {
  func, array
} = React.PropTypes

Menu.propTypes = {
  dispatch: func.isRequired,
  packs: array.isRequired
}

export default connect(mapStateToProps)(Menu)
