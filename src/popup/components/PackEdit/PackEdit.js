import React from 'react';
import { connect } from 'react-redux';
import { assoc, isNil } from 'ramda';
import TitlePack from '../Pack/TitlePack';
import DescriptionPack from '../Pack/DescriptionPack';
import Cards from '../Card/Cards';
import Time from './Time';
import { changePackageTitle,
         changePackageDescription,
         isEditPackage } from '../../actions/pack';
import { newPackage } from '../../actions/flags';

let PackEdit = ({
    dispatch,
    isEdit,
    packflag,
    packs
}) => {

  const handlePackTitle = e => {
      if(isEdit.newPackage)
        dispatch(newPackage(assoc('title', e.target.value, packflag)));
  };

	const handlePackDescription = e => {
      if(isEdit.newPackage)
        dispatch(newPackage(assoc('description', e.target.value, packflag)));
	};

	const handleComeBack = () => {
		dispatch(isEditPackage({newPackage: false, packageid: null}));
	};

	const titleProps = {
		onChange: handlePackTitle,
		title: (!isNil(isEdit.packageid) ? packs[isEdit.packageid].title : packflag.title)
	};

	const descriptionProps = {
		onChange: handlePackDescription,
		description: (!isNil(isEdit.packageid) ? packs[isEdit.packageid].description : packflag.description)
	};

  const Container = () => (
      <section className="config-package">
				<nav>
					<button className="btn btn-back" onClick={handleComeBack}>Voltar
							<svg className="arrow-back">
								<use xlinkHref="#icon-arrow"></use>
							</svg>
					</button>
					<button className="btn btn-save">Salvar pacote</button>
				</nav>
				<div>
					<TitlePack {...titleProps}/>
					<DescriptionPack {...descriptionProps}/>
          <Time idPackage={0}/>
          <Cards idPackage={isEdit.packageid !== null ? isEdit.packageid : 0}/>
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
