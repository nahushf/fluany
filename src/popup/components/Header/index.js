/**
 * @fileOverview The component to show others component in popup header
 * @name index.js<Header>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import Fish3 from 'components/Fish3'
import Logo from 'components/Logo'
import Search from 'components/Search'
import LoadPack from 'components/LoadPacks'
import ImportPack from 'components/ImportPack'
import ExportPack from 'components/ExportPack'
import Message from 'components/Message'

const Header = () => (
  <div>
    <LoadPack/>
    <Logo />
    <Message />
    <Fish3 />
    <ExportPack icon='all' />
    <ImportPack />
    <Search />
  </div>
)

export default Header
