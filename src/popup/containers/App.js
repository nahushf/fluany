/**
 * @fileOverview The App container
 * @name App.js<popup>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import { connect } from 'react-redux'
import Either from 'components/Either'
import Home from './Home'
import PackConfig from './PackConfig'

const App = ({ isEdit }) => (
    <Either
        when={ isEdit.newPackage || isEdit.packageid != null }
        left={ <Home /> }
        right={ <PackConfig /> } />
)

const mapStateToProps = (
  state
) => {
  return {
    isEdit: state.flags.isEditPackage
  }
}

export default connect(mapStateToProps)(App)
