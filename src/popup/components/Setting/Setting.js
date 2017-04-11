import React from 'react';
import { connect } from 'react-redux';

let Setting = () => {
  return (
      <section className="setting-content">
				<svg className="setting-icon">
					<use xlinkHref="#icon-setting"></use>
				</svg>
      </section>
  );
}


export default connect()(Setting);
