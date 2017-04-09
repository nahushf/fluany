import { ADD_PACKAGE,
         CHANGE_PACKAGE_TITLE,
         CHANGE_PACKAGE_DESCRIPTION,
         CHANGE_PACKAGE_COLORID,
         IS_CHANGING_COLOR,
				 CHANGE_TIME_PACKAGE,
         IS_EDITING_CARD } from '../constants/ActionTypes';
import { assoc, update } from 'ramda';

let defaultState = [
{
    id: 0,
    title: 'Pack teste numero 0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sithendrerit ultrices',
    colorID: 4,
		isChangingColor: false,
		timeMinutes: 3,
    cards: [
        {
            id: 0,
            colorID: 1,
            front: "Hello",
            back: "Olá",
            isEditing: false
        },
        {
            id: 1,
            colorID: 2,
            front: "Hi",
            back: "Olá",
            isEditing: false
        },
        {
            id: 2,
            colorID: 3,
            front: "Hello",
            back: "Olá",
            isEditing: false
        },
        {
            id: 3,
            colorID: 4,
            front: "Hello",
            back: "Olá",
            isEditing: false
        }
    ]
},
{
    id: 1,
    title: 'Pack teste numero 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sithendrerit ultrices',
    colorID: 2,
		isChangingColor: false,
		timeMinutes: 0
},

{
    id: 2,
    title: 'Pack teste numero 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sithendrerit ultrices',
    colorID: 3,
		isChangingColor: false,
		timeMinutes: 0
},
{
    id: 3,
    title: 'Pack teste numero 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sithendrerit ultrices',
    colorID: 3,
		isChangingColor: false,
		timeMinutes: 0
},
{
    id: 4,
    title: 'Pack teste numero 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sithendrerit ultrices',
    colorID: 1,
		isChangingColor: false,
		timeMinutes: 0
},
{
    id: 5,
    title: 'Pack teste numero 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sithendrerit ultrices',
    colorID: 4,
		isChangingColor: false,
		timeMinutes: 0
}
];

const packs = (state = defaultState, action) => {
    switch(action.type){
        case ADD_PACKAGE:
            return [...state, action.value];
        case CHANGE_PACKAGE_TITLE:
            return update(action.id, assoc('title', action.value, state[action.id]), state);
        case CHANGE_PACKAGE_DESCRIPTION:
            return update(action.id, assoc('description', action.value, state[action.id]), state);
        case CHANGE_PACKAGE_COLORID:
            return update(action.id, assoc('colorID', action.value, state[action.id]), state);
        case IS_CHANGING_COLOR:
            return update(action.id, assoc('isChangingColor', action.value, state[action.id]), state);
				case CHANGE_TIME_PACKAGE:
            return update(action.id, assoc('timeMinutes', action.value, state[action.id]), state);
        case IS_EDITING_CARD:
            return update(action.id, assoc('cards',
                                           update(action.idCard,
                                                  assoc('isEditing', action.value,
                                                        state[action.id].cards[action.idCard]),
                                                  state[action.id].cards),
                                       state[action.id]),
                      state);
        default:
            return state;
    }
};

export default packs;
