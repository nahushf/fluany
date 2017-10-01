import { CHANGE_FILTER_PACKAGE,
         CHANGE_PAGINATION_PACKAGE,
         TOGGLE_ACTIVE_SEARCH,
         LOADING_EDIT_PACKAGES,
         CHANGE_CARD,
         CHANGE_MESSAGE,
         MENU_TOGGLE,
				 IS_EDIT_PACKAGE,
         NEW_PACKAGE } from '@popup/constants/ActionTypes.js';



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


export function isEditPackage(value){
	return {
		type: IS_EDIT_PACKAGE,
		value
	};
}


export function changeCard(value){
	return {
		type: CHANGE_CARD,
		value
	};
}

export function menuToggle(value){
  return {
    type: MENU_TOGGLE,
    value
  };
}

export function changeMessage(value){
  return {
    type: CHANGE_MESSAGE,
    value
  };
}

export function editPackageLoading(value){
  return {
    type: LOADING_EDIT_PACKAGES,
    value
  };
}
