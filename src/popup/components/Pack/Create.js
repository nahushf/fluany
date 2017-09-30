import React from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { addPackage } from '../../actions/pack';
import { newPackage, isEditPackage, changeMessage } from '../../actions/flags';
import * as translator from '../../../shared/constants/internacionalization';
import { sendMessageBackground } from '../../../shared/helpers.js';
import { sendEventButton } from '../../../analytics/analytics';

/**
 * A component to Create pack
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @return {Component}
 */
let Create = ({
    titleEdited,
    dispatch }) => {

    const handleClickCreate = () => {
        sendEventButton('home', 'Create Package');
        const newPackageId = uuid();
        if(titleEdited === ""){
            dispatch(changeMessage({
                error: true,
                info: 'Voce precisa inserir um título para criar sua lista de estudos',
            }))
        }else{
            dispatch(changeMessage({
                error: false,
                success: false,
                info: '',
            }));
            dispatch(isEditPackage({newPackage: true, packageid: newPackageId}));
            dispatch(addPackage({id: newPackageId, title: titleEdited}));
            dispatch(newPackage({title: "", description: ""})); //initial
            sendMessageBackground({ name:'updateContextAddPackages',
                                    trigger: { title: titleEdited, id: newPackageId }})
        }
    }

    const handleInputNewPackage = (e) => {
        dispatch(newPackage({title: e.target.value, description: ""}));
    }

    const Creating = () => (
        <div className="pack-item--creating">
            <p className="pack-item--title">{ translator.PACK_CRETE_TITLE }</p>
            <input className="pack-item--input"
                   name="newpack"
                   type="text"
                   tabIndex='1'
                   onChange={handleInputNewPackage}
                   placeholder={ translator.PACK_CREATE_PLACEHOLDER }/>

            <div className="new-pack--buttons">
                <button className="btn btn-create"
                        tabIndex='2'
                        onClick={handleClickCreate}>{ translator.PACK_CREATE_BUTTON }</button>
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
    titleEdited: state.flags.newPackage.title
});

const {
    func, number, string
} = React.PropTypes;

Create.propTypes = {
    titleEdited: string.isRequired,
    dispatch: func.isRequired
};

export default connect(
    mapStateToProps)(Create);
