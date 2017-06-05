import React from 'react';
import { connect } from 'react-redux';
import { saveInLocal } from '../../store/LocalStore.js';

let Play = ({
    packageid
}) => {

    const handleClickPlay = (e) => {
        e.stopPropagation();
        saveInLocal('idPackToTrain', packageid);
    }

    return (
        <section className="play-content" onClick={handleClickPlay}>
            <svg className="play-icon">
                <use xlinkHref="#icon-play"></use>
            </svg>
            <span className="play-label">Treinar</span>
        </section>
    );
}


export default connect()(Play);
