import React from 'react';
import { connect } from 'react-redux';
import { map,  } from 'ramda';
import Card from './Card';
import CreateCard from './CreateCard';
import { getIndexThingById } from '../../reducers/stateManipulate.js';

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
    packageid
}) => {

    const cardMap = (card, index) => <Card key={index} packageid={packageid} index={index} {...card}/>;

    return (
        <section>
            <ul className="card-content">
                <CreateCard/>
                { packs[getIndexThingById(packs, packageid)].cards.map(cardMap) }
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
