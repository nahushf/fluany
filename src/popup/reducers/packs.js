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
         IS_EDITING_CARD } from '../constants/ActionTypes';
import { assoc, update, propEq, insert, remove } from 'ramda';
import { getIndexThingById } from './stateManipulate';
import defaultState from '../store/packsDefaultStore';

const packs = (state = defaultState, action) => {
		const indexOfThePack = getIndexThingById(state, action.id);
	  const packOfTheId = state[indexOfThePack];
    switch(action.type){
        case ADD_PACKAGE:
					const newPackage = { ...action.value, cards: [], colorID:  4};
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
					const cards = update(action.idCard,
													 assoc(action.prop, action.value, state[action.id].cards[action.idCard]),
															 state[action.id].cards);
				return update(indexOfThePack, assoc('cards', cards, packOfTheId),
                      state);
        default:
            return state;
    }
};

export default packs;
