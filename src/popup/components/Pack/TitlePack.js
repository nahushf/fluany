import React from 'react';
import { connect } from 'react-redux';
import * as translator from '@shared/constants/internacionalization';

/**
 * A component to see/edit package's title
 *
 * @param  {Function} onChange   A function to receive value when change textarea;
 * @param  {String}   title   The package title
 * @return {Component}
 */

let elementTitle = '';
const TitlePack = ({ onChange,
                     title,
                     disabled,
                     onClick,
                     tabIndex,
                     refToComponent,
                     handleEditTitle }) => {

    const handleRefElement = (element) => {
        refToComponent(element);
        elementTitle = element;
    }
    const handleOnChange = (e) => {
        onChange(e);
    }

    return (
        <div className="title-package--container">
            <textarea
                className="input-title-package"
                type="text"
                onChange={handleOnChange}
                spellCheck="false"
                maxLength="40"
                disabled={disabled}
                autoCorrect="false"
                tabIndex={tabIndex}
                ref={handleRefElement}
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
}

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
