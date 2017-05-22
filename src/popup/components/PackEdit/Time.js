import React from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import { changeTimePackage } from '../../actions/pack';
import { getIndexThingById } from '../../reducers/stateManipulate';

let Time = ({
  dispatch,
	packs,
	packageid
}) => {

	const handleTimeChange = (component, value) => {
		  dispatch(changeTimePackage(value, packageid));
	};

	return (
		  <section className="time-container">
			<InputRange
				maxValue={20}
				minValue={1}
				value={packs[getIndexThingById(packs, packageid)].timeMinutes}
				onChange={handleTimeChange}
				defaultValue={4}
				labelSuffix="min"
			/>
		</section>
	);
}

const mapStateToProps = (
  state
) => {
  return {
		packs: state.packs
  };
};

export default connect(mapStateToProps)(Time);
