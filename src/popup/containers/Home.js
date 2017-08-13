import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search/Search';
import PackList from '../components/Pack/PackList';
import Logo from '../components/Logo/Logo';
import Rocket from '../components/Rocket/Rocket';
import LoadPack from '../components/LoadPacks/LoadPacks.js';
import ExportPack from '../components/ExportPack/ExportPack'

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
          <Rocket/>
          <ExportPack  />
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
