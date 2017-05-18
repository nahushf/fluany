import React from 'react';

const TooltipCard = ({
    back,
    color
}) => (
        <div className={"tooltip-card color-" + color}>
            <p className="card-item--flash">Back</p>
            <p>{ back }</p>
            <p className="card-item--count card-item--edit">Editar</p>
            <svg className="edit-icon">
                <use xlinkHref="#icon-edit"></use>
            </svg>
        </div>
);

export default TooltipCard;
