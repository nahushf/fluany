import React from 'react';
import { removePackage } from '@popup/actions/pack';
import * as translator from '@shared/constants/internacionalization';

const Delete = ({
	dispatch,
	packageid,
  playing
}) => {

	const handleRemovePack = (e) => {
    // Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of
    // the event.
    e.stopPropagation();
    if(!playing)
      dispatch(removePackage(packageid));
	};

	return (
	 <div className="setting-trash" onClick={handleRemovePack} title={ translator.PACK_DELETE_LABE  }>
			<svg className="trash-icon" >
				<use xlinkHref="#icon-trash"></use>
			</svg>
		</div>
	);
}

const {
    func, string
} = React.PropTypes;

Delete.propTypes = {
    dispatch: func.isRequired,
}

export default Delete;
