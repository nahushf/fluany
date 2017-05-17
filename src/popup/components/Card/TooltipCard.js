import React from 'react';

const TooltipCard = ({
    back,
    color
}) => (
        <div className={"tooltip-card color-" + color}>
            <p>{ back }</p>
        </div>
);

export default TooltipCard;
