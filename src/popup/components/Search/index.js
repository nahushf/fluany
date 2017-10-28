/**
 * @fileOverview A component to get search value of the user
 * @name index.js<Search>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as translator from 'shared/constants/internacionalization'
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
      <a>
        <svg className='search-icon' onClick={handleClickSearch}>
           <use xlinkHref='#icon-search' />
        </svg>
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
