import React from 'react';
import { connect } from 'react-redux';
import { isEditPackage } from '../../actions/pack';

const SettingContent = ({
    dispatch,
    packageid
}) => {

  const handleClickItem = () => {
      dispatch(isEditPackage({newPackage: false, packageid}))
  }

	return (
		<section className="setting-panel">
			<ul>
				<li className="setting-share">
            <svg className="share-icon">
                <use xlinkHref="#icon-share"></use>
            </svg>

            <label>Compartilhar</label>
				</li>

				<li className="setting-edit" onClick={handleClickItem}>
            <svg className="edit-icon">
                <use xlinkHref="#icon-edit"></use>
            </svg>

            <label>Editar</label>
				</li>

				<li className="setting-trash">
            <svg className="trash-icon">
                <use xlinkHref="#icon-trash"></use>
            </svg>

            <label>Apagar</label>
				</li>

			</ul>
		</section>
	);
};

export default connect()(SettingContent);
