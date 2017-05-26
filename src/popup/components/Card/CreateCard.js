import React from 'react';
import { connect } from 'react-redux';
import { createCard, isEditingCard } from '../../actions/pack';
import { getIndexThingById } from '../../reducers/stateManipulate';

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
        const idNewCard = packs[indexOfPack].cards.length;
        const newCard = {id: idNewCard, isEditing: false, front: "", back: ""};
        dispatch(createCard(packageid, idNewCard , newCard));

        //Effect to open card created
        setTimeout(()=>{
            document.querySelector('ul.card-content li:nth-child(2) .card-item-block').click();
        }, 100);
    }

    return (
        <li key="0" className="card-item card-item--new" onClick={handleCreateCard}>
            <div className="card-item-block">
                <p className="card-item--more">+</p>
                <p className="item-more-message">Adicionar termo</p>
            </div>
        </li>
    );
}

const {
    func, bool
} = React.PropTypes;

CreateCard.propTypes = {
    dispatch: func.isRequired
};

export default CreateCard;
