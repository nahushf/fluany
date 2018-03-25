/**
 * @fileOverview A component to get search value of the user
 * @name index.js<Search>
 * @license GNU General Public License v3.0
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tooltip from 'components/Tooltip'
import * as translator from 'shared/constants/i18n'
import {
  changeFilterPackage,
  toggleActiveSearch
} from 'actions/flags'

let Search = ({
  onChangeFilterPackage,
  onToggleActiveSearch,
  filterPackage,
  isActiveSearch
}) => {

  let refToSearch = ''
  const handleChangeFilter = e => {
    onChangeFilterPackage(e.target.value)
  }

  const handleClickSearch = () => {
    refToSearch.focus()
    onToggleActiveSearch()
  }

  return (
    <section className={`search-content ${isActiveSearch ? 'search-active' : ''}`}>
      <a href="#" onClick={handleClickSearch}>
        <svg className='search-icon'>
           <use xlinkHref='#icon-search' />
        </svg>
        <Tooltip name={translator.SEARCH_LABEL} />
      </a>
      <input
          type='search'
          className='search-input'
          placeholder={translator.SEARCH_LABEL}
          onChange={handleChangeFilter}
          ref={(input) => { refToSearch = input }}
          value={filterPackage} />
    </section>
  )
}

const mapStateToProps = (
    state
) => {
  return {
    filterPackage: state.flags.filterPackage,
    isActiveSearch: state.flags.isActiveSearch
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeFilterPackage: (...props) => dispatch(changeFilterPackage(...props)),
    onToggleActiveSearch: (...props) => dispatch(toggleActiveSearch(...props)),
  }
}

const {
  func, bool, string
} = PropTypes

Search.propTypes = {
  onChangeFilterPackage: func.isRequired,
  onToggleActiveSearch: func.isRequired,
  filterPackage: string,
  isActiveSearch: bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
