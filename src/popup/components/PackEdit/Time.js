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
          <h2 className="time-title">Escolha o seu intervalo de estudo:
							<svg className="info-icon">
								<use xlinkHref="#icon-info"></use>
							</svg>
          </h2>

        <InputRange
            maxValue={50}
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

const {
    func, array, number
} = React.PropTypes;

Time.propTypes = {
    dispatch: func.isRequired,
    packs: array.isRequired,
}

export default connect(mapStateToProps)(Time);
