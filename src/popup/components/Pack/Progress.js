import React from 'react';
import { Line } from 'rc-progress';

const Progress = ({}) => {
    const low = "#db5656";
    const middle = "#f2d368";
    const hight = "#b2da76";
    return (
        <div className="progress-panel">
            <Line percent={10} strokeWidth="4" strokeColor={low}/>
        </div>
    )
}

export default Progress;
