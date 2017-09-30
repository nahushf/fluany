import React from 'react';
import Fish3 from '../Fish3/Fish3';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import LoadPack from '../LoadPacks/LoadPacks';
import ImportPack from '../ImportPack/ImportPack';
import ExportPack from '../ExportPack/ExportPack';
import Message from '../Message/Message';

const Header = ({ dispatch }) => (
  <div>
    <LoadPack dispatch={dispatch} />
    <Logo/>
    <Message dispatch={dispatch} />
    <Fish3/>
    <ExportPack dispatch={dispatch} icon='all' />
    <ImportPack dispatch={dispatch} />
		<Search/>
  </div>
);

export default Header;
