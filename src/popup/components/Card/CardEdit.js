import React from 'react';

const CardEdit = ({
    dispatch
}) => {

    return (
        <div className="card-edit-container">
            <div className="card-edit-content">
                <p>Front</p>
                <input placeholder="Digite o que vai aparecer no front"></input>
            </div>

            <div className="card-edit-content">
                <p>Back</p>
                <input placeholder="Digite o que vai aparecer no Back"></input>
            </div>
        </div>
    );
}

export default CardEdit;
