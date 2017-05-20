import React from 'react';
import { connect } from 'react-redux';
import { createCard } from '../../actions/pack';
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
    packs }) => {

    const indexOfPack = getIndexThingById(packs, packageid);
    const handleCreateCard = () => {
        const idNewCard = packs[indexOfPack].cards.length;
        const newCard = {id: idNewCard, isEditing: false, front: "Novo front", back: "Novo back"};
        dispatch(createCard(packageid, idNewCard , newCard));
    }

    return (
        <li key="0" className="card-item card-item--new" onClick={handleCreateCard}>
            <div className="card-item-block">
                <p className="card-item--more">+</p>
                <p className="item-more-message">Adicionar mais</p>
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
