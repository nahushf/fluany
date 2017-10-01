import React from 'react';
import { connect } from 'react-redux';
import * as translator from '@shared/constants/internacionalization';
/**
 * A component to see/edit package's description
 *
 * @param  {Function} onChange   A function to receive value when change textarea;
 * @param  {String}   description   The package description
 * @return {Component}
 */
const DescriptionPack = ({onChange, description}) => (
    <div className="description-package--container">
			<textarea
				className="input-description-package"
				type="text"
				onChange={onChange}
				value={description}
				spellCheck="false"
				maxLength="82"
        placeholder={ translator.PACK_DESCRIPTION_PLACEHOLDER }
				autoCorrect="false">
			</textarea>
      <div className="description-edit-icon">
        <svg className="edit-icon">
            <use xlinkHref="#icon-edit"></use>
        </svg>
      </div>
    </div>
);


const {
  func, string
} = React.PropTypes;

DescriptionPack.propTypes = {
  onChange: func.isRequired,
  description: string.isRequired
};

export default connect()(DescriptionPack);
