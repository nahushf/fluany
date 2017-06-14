import React from 'react';
import { connect } from 'react-redux';
import { changePlayPack } from '../../actions/pack';
import { saveInLocal } from '../../store/LocalStore';
import Alarm from '../../../shared/Alarms.js';


let Play = ({
    packageid,
    playing,
    dispatch
}) => {
    const alarm = new Alarm('remindme', 1);
    const handleClickPlay = (e) => {
        e.stopPropagation();
        dispatch(changePlayPack(!playing, packageid));
        saveInLocal('idPackToTrain', packageid);
        if(playing) alarm.cancel();
        else alarm.create();
    }

    return (
        <section className={'play-content' + (playing ? ' playing': '')} onClick={handleClickPlay}>
            <a className={"play-btn" + (playing ? ' stop' : ' to-play')}></a>
            <span className="play-label">{ playing ? 'Parar' : 'Treinar'}</span>
        </section>
    );
}

export default connect()(Play);
