import React from 'react';
import { isEditingCard } from '../../actions/pack';

const CardEdit = ({
    dispatch,
    packs,
    packageid,
    idCard
}) => {

    const handleCardFront = e => {
        dispatch(isEditingCard(e.target.value, 'front', packageid, idCard));
    }

    const handleCardBack = e => {
        dispatch(isEditingCard(e.target.value, 'back', packageid, idCard));
    }

    return (
        <div className="card-edit-container">
            <div className="card-edit-content">
                <p>Front</p>
                <input value={packs[packageid].cards[idCard].front}
                       onChange={handleCardFront}
                       placeholder="Digite o que vai aparecer no front"></input>
            </div>

            <div className="card-edit-content">
                <p>Back</p>
                <input value={packs[packageid].cards[idCard].back}
                       onChange={handleCardBack}
                       placeholder="Digite o que vai aparecer no Back"></input>
            </div>
        </div>
    );
}

export default CardEdit;
