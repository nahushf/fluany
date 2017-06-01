import React from 'react';
import { removePackage } from '../../actions/pack';

const Delete = ({
	dispatch,
	packageid
}) => {

	const handleRemovePack = () => {
		dispatch(removePackage(packageid));
	};

	return (
	 <div className="setting-trash" onClick={handleRemovePack} title="Apagar lista">
			<svg className="trash-icon" >
				<use xlinkHref="#icon-trash"></use>
			</svg>
		</div>
	);
}

export default Delete;
