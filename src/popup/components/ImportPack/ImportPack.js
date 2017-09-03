import React from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { importPackage } from '../../actions/pack';
import { getIndexThingById } from '../../reducers/stateManipulate';
import * as translator from '../../../shared/constants/internacionalization';
import { assoc, compose, merge } from 'ramda';
import { settingNewPack } from '../../../shared/helpers.js';
import Icon from './import-icon.png';

/**
 * A component to import pack
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @return {Component}
 */

let ImportPack = ({
    dispatch }) => {

    const onReaderLoad = event => {
      const packLoaded = JSON.parse(event.target.result);
      const packages = packLoaded.map(settingNewPack);
      dispatch(importPackage(packages));
    };

    const handleOnChange = (e) => {
      const reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.readAsText(e.target.files[0]);
    };

    return (
      <section className="importPack">
			    <a href="#">
            <label htmlFor="input-import">
              <img src={Icon}></img>
            </label>
        </a>
        <input type="file" id="input-import" onChange={handleOnChange}></input>
      </section>
    );
}

const {
    func
} = React.PropTypes;

ImportPack.propTypes = {
    dispatch: func.isRequired
};

export default ImportPack;
