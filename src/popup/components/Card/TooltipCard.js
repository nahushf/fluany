import React from 'react';

const TooltipCard = ({
    back,
    color,
    handleOnDelete
}) => (
        <div className={"tooltip-card color-" + color}>
            <p className="card-item--flash">Resposta</p>
            <p className="card-back">{ back }</p>
            <p className="card-item--count card-item--edit">Editar</p>
            <svg className="trash-icon" onClick={handleOnDelete}>
                <use xlinkHref="#icon-trash"></use>
            </svg>
        </div>
);

const {
    func, number, string
} = React.PropTypes;

TooltipCard.propTypes = {
    back: string.isRequired,
    color: number.isRequired,
    handleOnDelete: func.isRequired
}

export default TooltipCard;
