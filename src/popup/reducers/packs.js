import { ADD_PACKAGE,
         CHANGE_PACKAGE_TITLE,
         CHANGE_PACKAGE_DESCRIPTION,
         CHANGE_PACKAGE_COLORID,
         CHANGE_CARD_BACK,
         CHANGE_CARD_FRONT,
         IS_CHANGING_COLOR,
         IS_SETTING,
				 CHANGE_TIME_PACKAGE,
				 REMOVE_PACKAGE,
				 REMOVE_CARD,
         IS_EDITING_CARD } from '../constants/ActionTypes';
import { assoc, update, propEq, insert, remove } from 'ramda';
import { getIndexThingById } from './stateManipulate';
import defaultState from '../store/packsDefaultStore';

const packs = (state = defaultState, action) => {
		const indexOfThePack = getIndexThingById(state, action.id);
	  const packOfTheId = state[indexOfThePack];
    switch(action.type){
        case ADD_PACKAGE:
					const randomColor = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
					const newPackage = { ...action.value, cards: [], colorID:  randomColor};
					return [newPackage, ...state];
				case REMOVE_PACKAGE:
					return remove (indexOfThePack, 1, state);
        case CHANGE_PACKAGE_TITLE:
					return update(indexOfThePack, assoc('title', action.value, packOfTheId), state);
        case CHANGE_PACKAGE_DESCRIPTION:
					return update(indexOfThePack, assoc('description', action.value, packOfTheId), state);
        case CHANGE_PACKAGE_COLORID:
					return update(indexOfThePack, assoc('colorID', action.value, packOfTheId), state);
        case IS_CHANGING_COLOR:
					return update(indexOfThePack, assoc('isChangingColor', action.value, packOfTheId), state);
        case IS_SETTING:
					return update(indexOfThePack, assoc('isSetting', action.value, packOfTheId), state);
				case CHANGE_TIME_PACKAGE:
					return update(indexOfThePack, assoc('timeMinutes', action.value, packOfTheId), state);
        case IS_EDITING_CARD:
					const indexCard = getIndexThingById(state[indexOfThePack].cards, action.idCard);
					const cards = update(action.idCard,
													 assoc(action.prop, action.value, state[indexOfThePack].cards[indexCard]),
															 state[indexOfThePack].cards);
				return update(indexOfThePack, assoc('cards', cards, packOfTheId),
                      state);
				case REMOVE_CARD:
					const indexOfTheCard = getIndexThingById(state[indexOfThePack].cards, action.idCard);
					const cardsWithRemoved = remove(indexOfTheCard, 1, state[indexOfThePack].cards);
					return update(indexOfThePack, assoc('cards', cardsWithRemoved, packOfTheId), state);
        default:
            return state;
    }
};

export default packs;
