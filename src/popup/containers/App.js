/**
 * @fileOverview The App container
 * @name App.js<popup>
 * @license GNU General Public License v3.0
 */

import React from 'react'
import { connect } from 'react-redux'
import Either from 'components/Either'
import Welcome from 'components/Welcome'
import Home from './Home'
import PackConfig from './PackConfig'

const AppContainer = ({ isEdit }) => (
  <Either
      when={ isEdit.newPackage || isEdit.packageid != null }
      left={ <Home /> }
      right={ <PackConfig /> } />
)

const App = ({ isWelcome, isEdit }) => (
  <Either
    when={ isWelcome }
    left={ <AppContainer isEdit={isEdit}/> }
    right={ <Welcome /> } />
)

const mapStateToProps = (
  state
) => {
  return {
    isEdit: state.flags.isEditPackage,
    isWelcome: state.flags.isWelcome
  }
}

export default connect(mapStateToProps)(App)
