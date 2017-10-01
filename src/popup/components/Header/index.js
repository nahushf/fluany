import React from 'react';
import Fish3 from 'components/Fish3';
import Logo from 'components/Logo';
import Search from 'components/Search';
import LoadPack from 'components/LoadPacks';
import ImportPack from 'components/ImportPack';
import ExportPack from 'components/ExportPack';
import Message from 'components/Message';

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
