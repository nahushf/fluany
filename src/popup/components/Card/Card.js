import React from 'react';
import { connect } from 'react-redux';
import { inc } from 'ramda';
import { isEditingCard } from '../../actions/actions';
import CardEdit from './CardEdit';


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
    colorID,
    id,
    idPackage
}) => {

    const isEditing = packs[idPackage].cards[id].isEditing;

    const handleClickCard = () => {
        dispatch(isEditingCard(!isEditing, idPackage, id));
    }

    return (
        <li className={"card-item" + (isEditing ? " isEditing" : "")}>
            <div className={"card-item-block color-" + colorID} onClick={handleClickCard}>
                <p className="card-item--count">{ inc(index) }</p>
            </div>
            <CardEdit />
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
