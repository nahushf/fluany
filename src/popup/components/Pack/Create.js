import React from 'react';
import { connect } from 'react-redux';
import { isCreatingPackage, addPackage } from '../../actions/pack';
import { newPackage, isEditPackage } from '../../actions/flags';

/**
 * A component to Create pack
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {Boolean} isCreating   A flag to know if it's creating package
 * @return {Component}
 */
let Create = ({
    isCreating,
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
            <p className="pack-item--title">Criar nova lista de estudos</p>
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

    const Content = () => (
        <div className="pack-item-content" onClick={handleClickNewItem}>
            <p className="create-package--icon">+</p>
            <p className="create-package--description">Adicionar novo pacote</p>
        </div>
    );

    return (
        <li key="0" className="pack-item pack-item--new">
            {isCreating ? Creating(): Content() }
        </li>
    );
}

const mapStateToProps = (
  state
) => ({
    isCreating: state.flags.isCreatingPackage,
    packLength: state.packs.length,
    titleEdited: state.flags.newPackage.title
    }
)

const {
    func, bool
} = React.PropTypes;

Create.propTypes = {
    dispatch: func.isRequired,
    isCreating: bool.isRequired
};

export default connect(
    mapStateToProps)(Create);
