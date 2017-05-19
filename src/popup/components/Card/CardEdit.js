import React from 'react';
import { isEditingCard, removeCard } from '../../actions/pack';
import { getIndexThingById } from '../../reducers/stateManipulate';

const CardEdit = ({
    dispatch,
    packs,
    indexOfPack,
    indexOfCard,
    handleClickCard
}) => {

    const handleCardFront = e => {
        dispatch(isEditingCard(e.target.value, 'front', indexOfPack, indexOfCard));
    }

    const handleCardBack = e => {
        dispatch(isEditingCard(e.target.value, 'back', indexOfPack, indexOfCard));
    }

    const handleRemoveCard = () => {
        handleClickCard();
        dispatch(removeCard(indexOfPack, indexOfCard));
    }

    return (
        <div className="card-edit-container">
            <div className="card-edit-content">
                <p>Front</p>
                <input value={packs[indexOfPack].cards[indexOfCard].front}
                       onChange={handleCardFront}
                       placeholder="Digite o que vai aparecer no front"></input>
            </div>

            <div className="card-edit-content">
                <p>Back</p>
                <input value={packs[indexOfPack].cards[indexOfCard].back}
                       onChange={handleCardBack}
                       placeholder="Digite o que vai aparecer no Back"></input>
            </div>
            <div className="card-delete" onClick={handleRemoveCard}>
                <svg className="trash-card">
                    <use xlinkHref="#icon-trash"></use>
                </svg>
                <label>Apagar</label>
            </div>
        </div>
    );
}

export default CardEdit;
