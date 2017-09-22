import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search/Search';
import PackList from '../components/Pack/PackList';
import Logo from '../components/Logo/Logo';
import Fish3 from '../components/Fish3/Fish3';
import LoadPack from '../components/LoadPacks/LoadPacks.js';
import ExportPack from '../components/ExportPack/ExportPack';
import ImportPack from '../components/ImportPack/ImportPack';

const Home = ({
    isEdit,
    dispatch }) => {
	if(isEdit.newPackage || isEdit.packageid !== null){
		return null;
	}else
		return (
				<div>
          <LoadPack dispatch={dispatch} />
          <Logo/>
          <Fish3/>
            <ExportPack dispatch={dispatch} icon='all' />
            <ImportPack dispatch={dispatch} />
					<Search/>
					<PackList/>
				</div>
		);
};

const mapStateToProps = (
  state
) => {
  return {
    isEdit: state.flags.isEditPackage
  };
};

export default connect(mapStateToProps)(Home);
