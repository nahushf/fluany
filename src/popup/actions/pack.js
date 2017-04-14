import { ADD_PACKAGE,
         IS_CREATING_PACKAGE,
         CHANGE_PACKAGE_COLORID,
         CHANGE_PACKAGE_TITLE,
         CHANGE_PACKAGE_DESCRIPTION,
         IS_CHANGING_COLOR,
				 IS_EDIT_PACKAGE,
				 CHANGE_TIME_PACKAGE,
         IS_EDITING_CARD } from '../constants/ActionTypes';

export function addPackage(value){
	  return {
		    type: ADD_PACKAGE,
        value
	  };
}

export function isCreatingPackage(value){
    console.log('value: ', value);
	  return {
		    type: IS_CREATING_PACKAGE,
        value
	  };
}

export function changeColorID(value, id){
    return {
        type: CHANGE_PACKAGE_COLORID,
        value,
        id
    };
}

export function isChangingColor(value, id){
    return {
        type: IS_CHANGING_COLOR,
        value,
        id
    };
}

export function isEditPackage(value){
	return {
		type: IS_EDIT_PACKAGE,
		value
	};
}


export function changeTimePackage(value, id){
	return {
		type: CHANGE_TIME_PACKAGE,
		value,
		id
	};
}

export function isEditingCard(value, id, idCard){
	  return {
		    type: IS_EDITING_CARD,
		    value,
		    id,
        idCard
	  };
}

export function changePackageTitle(id, value){
    return {
        type: CHANGE_PACKAGE_TITLE,
        value,
        id
    };
}

export function changePackageDescription(id, value){
    return {
        type: CHANGE_PACKAGE_DESCRIPTION,
        value,
        id
    };
}
