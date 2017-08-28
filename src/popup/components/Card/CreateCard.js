import React from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { createCard, isEditingCard } from '../../actions/pack';
import { getIndexThingById } from '../../reducers/stateManipulate';
import * as translator from '../../../shared/constants/internacionalization';

/**
 * A component to Create card
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {Boolean} isCreatingCard   A flag to know if it's creating card
 * @return {Component}
 */
let CreateCard = ({
    dispatch,
    packageid,
    indexOfPack,
    packs }) => {

    const handleCreateCard = () => {
        const idNewCard = uuid();
        const newCard = { id: idNewCard, isEditing: false, front: "", back: "", isCreating: true};
        dispatch(createCard(packageid, idNewCard , newCard));

        //Effect to open card created
        setTimeout(()=>{
            document.querySelector('ul.card-content li:nth-child(2) .card-item-block').click();
        }, 100);
    }

    return (
        <li key="0" className={"card-item " + (packs[indexOfPack].cards.length > 0 ? "card-item--new" : "card-item--new")} onClick={handleCreateCard}>
            <a href="#">
                <div className="card-item-block">
                    <p className="card-item--more">+</p>
                    <p className="item-more-message">{ translator.CARD_NEW_LABEL }</p>
                </div>
            </a>
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

const {
    func, number, array, string
} = React.PropTypes;

CreateCard.propTypes = {
    dispatch: func.isRequired,
    indexOfPack: number.isRequired,
    packs: array.isRequired,
};

export default connect(mapStateToProps)(CreateCard);
