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
import { assoc, update, reject, propEq, findIndex } from 'ramda';
import defaultState from '../store/storeDefault';

const packs = (state = defaultState, action) => {
		const getIndexPack = id => findIndex(propEq('id', id));
		const indexOfThePack = getIndexPack(action.id)(state);
		const packOfTheId = state[indexOfThePack];

    switch(action.type){
        case ADD_PACKAGE:
					return [...state, action.value];
				case REMOVE_PACKAGE:
					return  reject(propEq('id', action.id))(state);
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
					return update(indexOfThePack, assoc('cards',
                                           update(action.idCard,
                                                  assoc(action.prop, action.value,
                                                        state[action.id].cards[action.idCard]),
                                                  state[action.id].cards),
																					packOfTheId),
                      state);
        default:
            return state;
    }
};

export default packs;
