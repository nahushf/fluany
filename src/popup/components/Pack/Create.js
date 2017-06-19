import React from 'react';
import { connect } from 'react-redux';
import { addPackage } from '../../actions/pack';
import { newPackage, isEditPackage } from '../../actions/flags';

/**
 * A component to Create pack
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @return {Component}
 */
let Create = ({
    packLength,
    titleEdited,
    dispatch }) => {

    const handleClickCreate = () => {
        if(titleEdited !== ""){
            dispatch(isEditPackage({newPackage: true, packageid: packLength}));
            dispatch(addPackage({id: packLength, title: titleEdited}));
            dispatch(newPackage({title: "", description: ""})); //initial
        }
    }

    const handleInputNewPackage = (e) => {
        dispatch(newPackage({title: e.target.value, description: ""}));
    }

    const Creating = () => (
        <div className="pack-item--creating">
            <p className="pack-item--title">Criar uma nova lista de estudos</p>
            <input className="pack-item--input"
                   name="newpack"
                   type="text"
                   onChange={handleInputNewPackage}
                   placeholder="Qual o nome da lista ?"/>

            <div className="new-pack--buttons">
                <button className="btn btn-create"
                        onClick={handleClickCreate}>Criar lista</button>
            </div>
        </div>

    );

    return (
        <li key="0" className="pack-item pack-item--new">
            {Creating()}
        </li>
    );
}

const mapStateToProps = (
  state
) => ({
    packLength: state.packs.length,
    titleEdited: state.flags.newPackage.title
});

const {
    func, number, string
} = React.PropTypes;

Create.propTypes = {
    packLength: number.isRequired,
    titleEdited: string.isRequired,
    dispatch: func.isRequired
};

export default connect(
    mapStateToProps)(Create);
