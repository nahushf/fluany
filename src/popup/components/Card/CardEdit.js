import React from 'react';
import { isEditingCard } from '../../actions/pack';
import { changeCard } from '../../actions/flags';
import { getIndexThingById } from '../../reducers/stateManipulate';
import * as translator from '../../../shared/constants/internacionalization';

const CardEdit = ({
    dispatch,
    packs,
    indexOfPack,
    indexOfCard,
    packageid,
    cardEditing,
}) => {

    const handleCardFront = e => {
        dispatch(changeCard({front: e.target.value, back: cardEditing.back}));
    }

    const handleCardBack = e => {
        dispatch(changeCard({front: cardEditing.front, back: e.target.value}));
    }

    const frontValue = cardEditing.front !== null
                     ? cardEditing.front
                     : packs[indexOfPack].cards[indexOfCard].front;

    const backValue = cardEditing.back !== null
                    ? cardEditing.back
                    : packs[indexOfPack].cards[indexOfCard].back;

    return (
        <div className="card-edit-container">
            <div className="card-edit-content">
                <p>{ translator.CARD_FRONT_LABEL }</p>
                <input value={frontValue}
                       onChange={handleCardFront}
                       placeholder="Digite o termo"></input>
            </div>

            <div className="card-edit-content">
                <p>{ translator.CARD_BACK_LABEL }</p>
                <input value={backValue}
                       onChange={handleCardBack}
                       placeholder="Digite a definição"></input>
            </div>
        </div>
    );
}

const {
    func, number, array, object
} = React.PropTypes;

CardEdit.propTypes = {
    dispatch: func.isRequired,
    packs: array.isRequired,
    indexOfPack: number.isRequired,
    indexOfCard: number.isRequired,
    cardEditing: object.isRequired
}

export default CardEdit;
