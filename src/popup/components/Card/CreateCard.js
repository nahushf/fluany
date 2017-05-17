import React from 'react';
import { connect } from 'react-redux';

/**
 * A component to Create card
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {Boolean} isCreatingCard   A flag to know if it's creating card
 * @return {Component}
 */
let CreateCard = ({
    dispatch }) => {

    return (
        <li key="0" className="card-item card-item--new">
            <div className="card-item-block">
                <p className="card-item--count">+</p>
            </div>
        </li>
    );
}

const mapStateToProps = (
  state
) => ({
    isCreatingCard: state.flags.isCreatingCard
    }
)

const {
    func, bool
} = React.PropTypes;

CreateCard.propTypes = {
    dispatch: func.isRequired
};

export default connect(
    mapStateToProps)(CreateCard);
