import React from 'react';
import { Line } from 'rc-progress';
import { getInLocal } from '../../store/LocalStore';
import { find, propEq } from 'ramda';
import { changePorcentProgress,
         changeColorProgress,
         changePlayPack } from '../../actions/pack.js';

const Progress = ({
    dispatch,
    packageid,
    cards,
    percentage,
    colorProgress
    }) => {
    const low = "#db5656";
    const middle = "#f2d368";
    const hight = "#b2da76";
    getInLocal('packsInTraning')
        .then((packsInTraning) => {
            const packWithId = find(propEq('id', packageid), packsInTraning);
            if(packWithId){
                const sizeAccepted = cards.length - packWithId.cards.length;
                const updatePercent = (sizeAccepted/cards.length) * 100;
                dispatch(changePorcentProgress(updatePercent, packageid));
                if(updatePercent < 50){
                    dispatch(changeColorProgress(low, packageid));
                }else
                if(updatePercent < 70){
                    dispatch(changeColorProgress(middle, packageid));
                }else
                    dispatch(changeColorProgress(hight, packageid));
            }
        })
        .catch(() => {});

    return (
        <div className={"progress-panel" + (percentage === 100 ? ' success': '')}>
            <svg className="checkmark-icon">
                <use xlinkHref="#icon-checkmark"></use>
            </svg>
            <Line percent={percentage} strokeWidth="4" strokeColor={colorProgress}/>
        </div>
    )
}

const {
    func, number, bool, string, array
} = React.PropTypes;

Progress.propTypes = {
    dispatch: func.isRequired,
    packageid: number.isRequired,
    cards: array.isRequired,
    porcentage: number,
    colorProgress: string
}

export default Progress;
