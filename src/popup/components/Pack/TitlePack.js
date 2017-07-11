import React from 'react';
import { connect } from 'react-redux';
import * as translator from '../../../shared/constants/internacionalization';

/**
 * A component to see/edit package's title
 *
 * @param  {Function} onChange   A function to receive value when change textarea;
 * @param  {String}   title   The package title
 * @return {Component}
 */
const TitlePack = ({ onChange,
                     title,
                     disabled,
                     onClick,
                     refToComponent,
                     handleEditTitle }) => (
    <div className="title-package--container">
			<textarea
				className="input-title-package"
				type="text"
				onChange={onChange}
				spellCheck="false"
        disabled={disabled}
				autoCorrect="false"
        maxLength="30"
        ref={refToComponent}
        placeholder={ translator.PACK_TITLE_PLACEHOLDER }
				value={title}>
			</textarea>
      <div className="title-edit-icon" onClick={handleEditTitle} title={ translator.PACK_TITLE_PLACEHOLDER }>
        <svg className="edit-icon">
            <use xlinkHref="#icon-edit"></use>
        </svg>
      </div>
    </div>
);

const {
  func, string, bool
} = React.PropTypes;

TitlePack.propTypes = {
    onChange: func.isRequired,
    title: string.isRequired,
    disabled: string,
    onClick: func,
    handleEditTitle: func
};

export default connect()(TitlePack);
