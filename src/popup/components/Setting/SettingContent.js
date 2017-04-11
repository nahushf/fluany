import React from 'react';
import { connect } from 'react-redux';

const SettingContent = () => {

	return (
		<section className="setting-panel">
			<ul>
				<li>
					<label>Apagar</label>
				</li>
			</ul>
		</section>
	);
};

export default connect()(SettingContent);
