import React from 'react';

const TooltipCard = ({
    front,
    back
}) => (
        <div className="tooltip-card">
            <p><span>Front:</span> { front }</p>
            <p><span>Back:</span> { back }</p>
        </div>
);

export default TooltipCard;
