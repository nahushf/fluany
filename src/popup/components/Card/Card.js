import React from 'react';
import { connect } from 'react-redux';
import { inc } from 'ramda';


/**
 * A Card -> <Front and Back>
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {Number} index   A index is the card's number
 * @param  {Number} colorID   The id of color
 * @return {Component}
 */
const Card = ({
    dispatch,
    packs,
    index,
    colorID
}) => {

    return (
        <li className={"card-item color-" + colorID}>
            <p className="card-item--count">{ inc(index) }</p>
        </li>
    );
}

const mapStateToProps = (
    state
) => {
    return {
		    packs: state.packs
    };
};

export default connect(mapStateToProps)(Card);
