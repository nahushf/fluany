import React from 'react';
import { connect } from 'react-redux';
import { inc } from 'ramda';
import { isEditingCard } from '../../actions/pack';
import CardEdit from './CardEdit';
import TooltipCard from './TooltipCard';


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
    packageid
}) => {

    const isEditing = packs[packageid].cards[id].isEditing;
    let listItem = "";
    let styled = {
        backgroundColor: 'red'
    }

    const handleClickCard = () => {
        dispatch(isEditingCard(!isEditing, 'isEditing', packageid, id));
    }

    const cardEditProps = {
        dispatch,
        packs,
        packageid,
        idCard: id
    }

    return (
        <li className={"card-item" + (isEditing ? " isEditing" : "")} ref={(e) =>{listItem = e}}>
            <div className={"card-item-block color-" + colorID} onClick={handleClickCard}>
                <svg className="arrow-back">
                    <use xlinkHref="#icon-arrow"></use>
                </svg>
                <p className="card-item--count">{ inc(index) }</p>
            </div>
            <TooltipCard front={packs[packageid].cards[id].front} back={packs[packageid].cards[id].back}/>
            <CardEdit {...cardEditProps} />
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
