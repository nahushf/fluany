import { ADD_PACKAGE,
         CHANGE_PACKAGE_TITLE,
         CHANGE_PACKAGE_DESCRIPTION,
         CHANGE_PACKAGE_COLORID,
         CHANGE_CARD_BACK,
         CHANGE_CARD_FRONT,
         CHANGE_PACKAGE_COLOR,
         IS_SETTING,
				 CHANGE_TIME_PACKAGE,
				 REMOVE_PACKAGE,
				 REMOVE_CARD,
				 CHANGE_PLAY_PACK,
         LOAD_PACKS_LOCAL,
         CREATE_CARD,
         IS_EDITING_CARD } from '../constants/ActionTypes';
import { assoc, update, propEq, insert, remove } from 'ramda';
import { getIndexThingById } from './stateManipulate';
import packsDefaultState from '../store/packsDefaultStore';

const packs = (state = packsDefaultState, action) => {
		const indexOfThePack = getIndexThingById(state, action.id);
	  const packOfTheId = state[indexOfThePack];
    switch(action.type){
        case LOAD_PACKS_LOCAL:
          return action.value;
        case ADD_PACKAGE:
					const randomColor = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
          const newPackage = { ...action.value, cards: [], colorID:  randomColor, timeMinutes: 4 };
					return [newPackage, ...state];
				case REMOVE_PACKAGE:
					return remove (indexOfThePack, 1, state);
        case CHANGE_PACKAGE_TITLE:
					return update(indexOfThePack, assoc('title', action.value, packOfTheId), state);
        case CHANGE_PACKAGE_DESCRIPTION:
					return update(indexOfThePack, assoc('description', action.value, packOfTheId), state);
        case CHANGE_PACKAGE_COLORID:
					return update(indexOfThePack, assoc('colorID', action.value, packOfTheId), state);
        case CHANGE_PACKAGE_COLOR:
					return update(indexOfThePack, assoc('isChangingColor', action.value, packOfTheId), state);
        case IS_SETTING:
					return update(indexOfThePack, assoc('isSetting', action.value, packOfTheId), state);
				case CHANGE_TIME_PACKAGE:
					return update(indexOfThePack, assoc('timeMinutes', action.value, packOfTheId), state);
				case CHANGE_PLAY_PACK:
					return update(indexOfThePack, assoc('playing', action.value, packOfTheId), state);
				/*
			  ** CARDS ACTIONS
			  ** Action [ idCard ] Is the position of the card in packages.
				*/
        case IS_EDITING_CARD:
					const cards = update(action.indexCard,
													 assoc(action.prop, action.value, packOfTheId.cards[action.indexCard]),
															 packOfTheId.cards);
				return update(indexOfThePack, assoc('cards', cards, packOfTheId),
                      state);
				case REMOVE_CARD:
					const cardsWithRemoved = remove(action.indexCard, 1, packOfTheId.cards);
					return update(indexOfThePack, assoc('cards', cardsWithRemoved, packOfTheId), state);
        case CREATE_CARD:
					const randomCardColor = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
			const newCard = { ...action.value, colorID: randomCardColor };
        return update(indexOfThePack, assoc('cards', [newCard, ...packOfTheId.cards], packOfTheId), state);
        default:
            return state;
    }
};

export default packs;
