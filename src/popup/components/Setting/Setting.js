import React from 'react';
import { connect } from 'react-redux';
import SettingPanel from './SettingPanel';
import { isSetting } from '../../actions/pack';

const Setting = ({
    packageid,
    dispatch,
    isShow
}) => {

	const handleClickSetting = () => {
    dispatch(isSetting(!isShow, packageid));
	};
  return (
      <section className={"setting-content" + (isShow ? " show-setting": "")} onClick={handleClickSetting}>
				<svg className="setting-icon">
					<use xlinkHref="#icon-setting"></use>
				</svg>
        <SettingPanel packageid={packageid} />
      </section>
  );
};


export default connect()(Setting);
