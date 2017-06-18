import React from 'react';
import Alarm from '../../../shared/Alarms.js';
import { connect } from 'react-redux';
import { saveInLocal, getInLocal } from '../../store/LocalStore';
import { getIndexThingById } from '../../reducers/stateManipulate';
import { insert, reject, propEq, update, assoc } from 'ramda';
import { changePlayPack,
         changePorcentProgress,
         changeColorProgress } from '../../actions/pack';

let Play = ({
    packageid,
    playing,
    title,
    cards,
    dispatch,
    percentage,
    interval
}) => {
    const alarm = new Alarm('ALARM_'+packageid, interval);

    const handleClickPlay = (e) => {
        e.stopPropagation();
        dispatch(changePlayPack(!playing, packageid));
        if(!playing){
            alarm.create();
        }else{
            alarm.cancel();
        }

        if(percentage === 100 && !playing){
            getInLocal('packsInTraning')
                .then((packsInTraning) => {
                    const index = getIndexThingById(packsInTraning, packageid);
                    const packsInTraningWithCardsRestarted = update(index, assoc('cards', cards, packsInTraning[index]), packsInTraning);
                    saveInLocal('packsInTraning', packsInTraningWithCardsRestarted);
                    dispatch(changePorcentProgress(0, packageid));
                })
        }
    }


    return (
        <section className={'play-content' + (percentage < 100
                                              ? playing ? ' playing': ''
                                              : /*otherwise*/ ' restart')}
                 onClick={handleClickPlay}>
            <a className={"play-btn" + (playing ? ' stop' : ' to-play')}></a>
            <span className="play-label">{ percentage < 100
                                           ? playing ? 'Parar' : 'Treinar'
                                           : /*otherwise*/ 'Recomeçar'}</span>
        </section>
    );
}

export default connect()(Play);
