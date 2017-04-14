import { CHANGE_FILTER_PACKAGE,
         CHANGE_PAGINATION_PACKAGE,
         TOGGLE_ACTIVE_SEARCH,
         NEW_PACKAGE } from '../constants/ActionTypes.js';



export function changeFilterPackage(value){
    return {
        type: CHANGE_FILTER_PACKAGE,
        value
    };
}

export function toggleActiveSearch(){
    return {
        type: TOGGLE_ACTIVE_SEARCH
    };
}

export function newPackage(value){
    return {
        type: NEW_PACKAGE,
        value
    };
}

export function changePagination(){
    return {
        type: CHANGE_PAGINATION_PACKAGE
    };
};
