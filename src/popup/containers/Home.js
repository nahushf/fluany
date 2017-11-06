/**
 * @fileOverview The Home container
 * @name Home.js<popup>
 * @license GNU General Public License v3.0
 */

import React from 'react'
import Header from 'components/Header'
import PackList from 'components/Pack/PackList'

const Home = () => (
    <div>
      <Header />
      <PackList />
    </div>
)

export default Home
