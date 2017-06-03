import React from 'react';
import { isEditingCard } from '../../actions/pack';
import { getIndexThingById } from '../../reducers/stateManipulate';

const CardEdit = ({
    dispatch,
    packs,
    indexOfPack,
    indexOfCard,
    packageid
}) => {

    const handleCardFront = e => {
        dispatch(isEditingCard(e.target.value, 'front', packageid, indexOfCard));
    }

    const handleCardBack = e => {
        dispatch(isEditingCard(e.target.value, 'back', packageid, indexOfCard));
    }

    return (
        <div className="card-edit-container">
            <div className="card-edit-content">
                <p>Termo</p>
                <input value={packs[indexOfPack].cards[indexOfCard].front}
                       onChange={handleCardFront}
                       placeholder="Digite o termo"></input>
            </div>

            <div className="card-edit-content">
                <p>Definição</p>
                <input value={packs[indexOfPack].cards[indexOfCard].back}
                       onChange={handleCardBack}
                       placeholder="Digite a definição"></input>
            </div>
        </div>
    );
}

export default CardEdit;
