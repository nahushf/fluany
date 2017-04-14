import React from 'react';
import { connect } from 'react-redux';
import { inc } from 'ramda';
import { isEditingCard } from '../../actions/pack';
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
    let listItem = "";
    let styled = {
        backgroundColor: 'red'
    }

    const handleClickCard = () => {
        let positionX = listItem.getBoundingClientRect().right;
        console.log(positionX);
        console.log(listItem)
        dispatch(isEditingCard(!isEditing, idPackage, id));
    }

    return (
        <li className={"card-item" + (isEditing ? " isEditing" : "")} ref={(e) =>{listItem = e}}>
            <div className={"card-item-block color-" + colorID} onClick={handleClickCard}>
                <svg className="arrow-back">
                    <use xlinkHref="#icon-arrow"></use>
                </svg>
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
