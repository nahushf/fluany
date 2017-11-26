/**
 * @fileOverview The component to show others component in popup header
 * @name index.js<Header>
 * @license GNU General Public License v3.0
 */

import React from 'react'
import Fish3 from 'components/Fish3'
import Logo from 'components/Logo'
import Search from 'components/Search'
import LoadPack from 'components/LoadPacks'
import ImportPack from 'components/ImportPack'
import ExportPack from 'components/ExportPack'
import Help from 'components/Help'
import Message from 'components/Message'
import Profile from 'components/Profile'

const Header = () => (
  <div>
    <LoadPack />
    <Logo />
    <Message />
    <Fish3 />
    <Profile />
    <Help />
    <ExportPack icon='all' />
    <ImportPack />
    <Search />
  </div>
)

export default Header
