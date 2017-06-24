import React from 'react';
import { connect } from 'react-redux';
import { inc, head, isEmpty, prop } from 'ramda';
import { isEditingCard, removeCard, allNoEditingCard } from '../../actions/pack';
import { changeCard } from '../../actions/flags';
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
    packageid,
    cardEditing
}) => {

    const indexOfCard = getIndexThingById(packs[indexOfPack].cards, id);
    const isEditing = packs[indexOfPack].cards[indexOfCard].isEditing;
    let listItem = "";

    const handleClickCard = () => {

        if(!isEditing){
            dispatch(allNoEditingCard(packageid));
        }

        listItem.style.transform = 'translateX(-' + (listItem.getBoundingClientRect().left - 25) + 'px)';
        dispatch(isEditingCard(!isEditing, 'isEditing', packageid, indexOfCard));
        dispatch(changeCard({front: null, back: null}));
    }

    const handleRemoveCard = (e) => {
        e.stopPropagation();
        dispatch(removeCard(packageid, indexOfCard));
    }

    const handleSaveCard = (e) => {
        e.stopPropagation();
        if(cardEditing.front !== null){
            dispatch(isEditingCard(cardEditing.front, 'front', packageid, indexOfPack));
        }

        if(cardEditing.back !== null){
            dispatch(isEditingCard(cardEditing.back, 'back', packageid, indexOfPack));
        }

        handleClickCard();
    }

    const cardEditProps = {
        dispatch,
        packs,
        indexOfPack,
        indexOfCard,
        packageid,
        cardEditing
    }

    return (
        <li className={"card-item" + (isEditing ? " isEditing" : " no-editing")} ref={(e) =>{listItem = e}}>
            <CardEdit {...cardEditProps} />
            <div className={"card-item-block color-" + colorID} onClick={handleClickCard}>
                <button className="btn-delete" onClick={handleClickCard}>
                    <span>Cancelar</span>
                </button>
                <button className="btn-save" onClick={handleSaveCard}>
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
		    packs: state.packs,
        cardEditing: state.flags.cardEditing,
    };
};

const {
    func, number, array, object
} = React.PropTypes;

Card.propTypes = {
    dispatch: func.isRequired,
    packs: array.isRequired,
    index: number,
    colorID: number.isRequired,
    indexOfPack: number.isRequired,
    id: number.isRequired,
    packageid: number.isRequired,
    cardEditing: object.isRequired
};

export default connect(mapStateToProps)(Card);
