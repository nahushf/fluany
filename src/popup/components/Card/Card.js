import React from 'react';
import { connect } from 'react-redux';
import { inc, head, isEmpty, prop } from 'ramda';
import { isEditingCard, removeCard } from '../../actions/pack';
import { getIndexThingById } from '../../reducers/stateManipulate';
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
    indexOfPack,
    id,
    packageid
}) => {

    const indexOfCard = getIndexThingById(packs[indexOfPack].cards, id);
    const isEditing = packs[indexOfPack].cards[indexOfCard].isEditing;
    let listItem = "";

    const handleClickCard = () => {

        /* if(isEmpty(prop('front', head(packs))) && isEmpty(prop('back', head(packs))))
         *     dispatch(removeCard(packageid, indexOfCard));
         */
        listItem.style.transform = 'translateX(-' + (listItem.getBoundingClientRect().left - 25) + 'px)';
        dispatch(isEditingCard(!isEditing, 'isEditing', packageid, indexOfCard));
    }

    const handleRemoveCard = (e) => {
        e.stopPropagation();
        dispatch(removeCard(packageid, indexOfCard));
    }

    const cardEditProps = {
        dispatch,
        packs,
        indexOfPack,
        indexOfCard,
        packageid
    }

    return (
        <li className={"card-item" + (isEditing ? " isEditing" : "")} ref={(e) =>{listItem = e}}>
            <CardEdit {...cardEditProps} />
            <div className={"card-item-block color-" + colorID} onClick={handleClickCard}>
                <button className="btn-delete" onClick={handleClickCard}>
                    <span>Cancelar</span>
                </button>
                <button className="btn-save">
                    <svg className="save-icon">
                        <use xlinkHref="#icon-correct"></use>
                    </svg>
                    <span>Salvar</span>
                </button>
                <TooltipCard handleOnDelete={handleRemoveCard} color={colorID} back={packs[indexOfPack].cards[indexOfCard].back}/>
                <p className="card-item--flash card-item--count">Pergunta</p>
                <p className="card-item--count">{ packs[indexOfPack].cards[indexOfCard].front}</p>
            </div>
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
