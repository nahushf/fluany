/**
 * @fileOverview The Home container
 * @name Home.js<popup>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
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
