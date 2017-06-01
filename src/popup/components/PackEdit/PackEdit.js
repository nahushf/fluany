import React from 'react';
import { connect } from 'react-redux';
import { assoc, isNil } from 'ramda';
import TitlePack from '../Pack/TitlePack';
import DescriptionPack from '../Pack/DescriptionPack';
import Cards from '../Card/Cards';
import Time from './Time';
import Play from '../Play/Play';
import { changePackageTitle,
         changePackageDescription } from '../../actions/pack';
import { newPackage, isEditPackage } from '../../actions/flags';
import { getIndexThingById } from '../../reducers/stateManipulate';

let PackEdit = ({
    dispatch,
    isEdit,
    packflag,
    packs
}) => {

  const handlePackTitle = e => {
    dispatch(changePackageTitle(isEdit.packageid, e.target.value));
  };

	const handleComeBack = () => {
		dispatch(isEditPackage({newPackage: false, packageid: null}));
	};

  const indexOfPack = getIndexThingById(packs, isEdit.packageid);

	const titleProps = {
		onChange: handlePackTitle,
		title: (!isNil(isEdit.packageid)
            ? packs[indexOfPack].title
            : packflag.title)
	};

  const Container = () => (
      <section className="config-package">
				<nav>
					<button className="btn btn-back" onClick={handleComeBack}>Voltar
							<svg className="arrow-back">
								<use xlinkHref="#icon-arrow"></use>
							</svg>
					</button>
				</nav>
				<div>
					<TitlePack {...titleProps}/>
          <Play />
          <Time packageid={isEdit.packageid}/>
          <Cards indexOfPack={indexOfPack} packageid={isEdit.packageid}/>
				</div>
      </section>
  );

  return isEdit ? Container() : (<div></div>);
};

const mapStateToProps = (
  state
) => {
  return {
      isEdit: state.flags.isEditPackage,
      packflag: state.flags.newPackage,
      packs: state.packs
  };
};

export default connect(mapStateToProps)(PackEdit);
