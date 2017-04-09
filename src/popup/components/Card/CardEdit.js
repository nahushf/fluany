import React from 'react';

const CardEdit = ({
    dispatch
}) => {

    return (
        <div className="card-edit-container">
            <div>
                <p>Front</p>
                <input placeholder="Digite o que vai aparecer no front"></input>
            </div>

            <div>
                <p>Back</p>
                <input placeholder="Digite o que vai aparecer no Back"></input>
            </div>
        </div>
    );
}

export default CardEdit;
