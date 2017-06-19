import React from 'react';
import { loadPackLocal } from '../../actions/pack.js';
import { getInLocal } from '../../store/LocalStore.js';

const LoadPacks = ({
    dispatch
}) => {
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
