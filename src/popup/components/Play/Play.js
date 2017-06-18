import React from 'react';
import { connect } from 'react-redux';
import { changePlayPack } from '../../actions/pack';
import { saveInLocal, getInLocal } from '../../store/LocalStore';
import Alarm from '../../../shared/Alarms.js';
import { insert, reject, propEq } from 'ramda';

let Play = ({
    packageid,
    playing,
    title,
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
