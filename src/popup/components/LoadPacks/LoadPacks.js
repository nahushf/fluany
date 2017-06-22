import React from 'react';
import { loadPackLocal } from '../../actions/pack.js';
import { isEditPackage } from '../../actions/flags.js';
import { getInLocal } from '../../store/LocalStore.js';

const LoadPacks = ({
    dispatch
}) => {
    getInLocal('openInPackage').then(id => {
        if(id){
            dispatch(isEditPackage({newPackage: false, packageid: id}));
         }
    })
    getInLocal('packState').then(pack => {
        dispatch(loadPackLocal(pack));
    });

    return null;
};

const {
    func
} = React.PropTypes;

LoadPacks.propTypes = {
    dispatch: func.isRequired
}

export default LoadPacks;
