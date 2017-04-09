import React from 'react';
import { connect } from 'react-redux';
import { map,  } from 'ramda';
import Card from './Card';

/**
 * A component to list store's packs
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {Array} packs   Store's packs
 * @param  {Number} idPackage   Is package's id that is using.
 * @return {Component}
 */
const Cards = ({
    dispatch,
    packs,
    idPackage
}) => {

    const cardMap = (card, index) => <Card key={index} idPackage={idPackage} index={index} {...card}/>;

    return (
        <section>
            <ul className="card-content">
                { packs[idPackage].cards.map(cardMap) }
            </ul>
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

export default connect(mapStateToProps)(Cards);
