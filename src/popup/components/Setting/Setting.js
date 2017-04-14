import React from 'react';
import { connect } from 'react-redux';
import SettingContent from './SettingContent';

const Setting = ({
    idpackage
}) => {

	const handleClickSetting = () => {
		console.log('clicked setting');
	};

  return (
      <section className="setting-content" onClick={handleClickSetting}>
				<svg className="setting-icon">
					<use xlinkHref="#icon-setting"></use>
				</svg>
      </section>
  );
};


export default connect()(Setting);
