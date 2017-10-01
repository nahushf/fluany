import React from 'react';
import Fish3 from '@popup/components/Fish3';
import Logo from '@popup/components/Logo';
import Search from '@popup/components/Search';
import LoadPack from '@popup/components/LoadPacks';
import ImportPack from '@popup/components/ImportPack';
import ExportPack from '@popup/components/ExportPack';
import Message from '@popup/components/Message';

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
