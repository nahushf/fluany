import React from 'react';
import { Line } from 'rc-progress';
import { getInLocal } from '../../store/LocalStore';
import { changePorcentProgress, changeColorProgress } from '../../actions/pack.js';
import { find, propEq } from 'ramda';

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
                const updatePercent = (sizeAccepted/8) * 100;
                dispatch(changePorcentProgress(updatePercent, packageid));
                if(updatePercent < 50){
                    dispatch(changeColorProgress(low, packageid));
                }else
                if(updatePercent < 70){
                    dispatch(changeColorProgress(middle, packageid));
                }else
                    dispatch(changeColorProgress(hight, packageid));
            }
        });

    return (
        <div className={"progress-panel" + (percentage === 100 ? ' success': '')}>
            <svg className="checkmark-icon">
                <use xlinkHref="#icon-checkmark"></use>
            </svg>
            <Line percent={percentage} strokeWidth="4" strokeColor={colorProgress}/>
        </div>
    )
}

export default Progress;
