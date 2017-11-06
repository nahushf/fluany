/**
 * @fileOverview A component to click and see more packages
 * @name MorePakage.js
 * @license GNU General Public License v3.0
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changePagination } from 'actions/flags'
import * as translator from 'shared/constants/internacionalization'

export const MorePackage = ({
  packs,
  filterPackage,
  paginationPackage,
  onChangePagination
}) => {

  const isPagination = paginationPackage >= packs.length || filterPackage !== ''
  return (
    <section className={`more-package--content ${isPagination ? 'more-package--hidden' : ''}`}>
      <button className='more-package--button btn'
              onClick={() => onChangePagination()}>
            + { translator.PACK_LOAD_MORE }
      </button>
    </section>
  )
}

const mapStateToProps = (
    state
) => ({
  paginationPackage: state.flags.paginationPackage,
  filterPackage: state.flags.filterPackage,
  packs: state.packs
})

function mapDispatchToProps(dispatch) {
  return {
    onChangePagination: () => dispatch(changePagination())
  }
}

const {
  func, string, number, array
} = PropTypes

/**
 * PropTypes
 * @property {Function}  onChangePagination  A action to change pagination flag
 * @property {Array}  packs All the packs availables
 * @property {String}  filterPackage  A flag to know if is search anything(input value)
 * @property {Number}  paginationPackage  A flag to know pagination number
 */
MorePackage.propTypes = {
  onChangePagination: func.isRequired,
  packs: array.isRequired,
  filterPackage: string.isRequired,
  paginationPackage: number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MorePackage)
