import React from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { importPackage } from '../../actions/pack';
import { getIndexThingById } from '../../reducers/stateManipulate';
import * as translator from '../../../shared/constants/internacionalization';
import { assoc, compose, merge } from 'ramda';
import { getRandomInt } from '../../../shared/helpers.js';

/**
 * A component to import pack
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @return {Component}
 */

let ImportPack = ({
    dispatch }) => {


	  const randomColor = () => getRandomInt(1, 4);
    const bootstrapPack = {
		  isChangingColor: false,
      colorID: randomColor(),
      isSetting: false,
		  timeMinutes: 1,
		  playing: false,
      id: uuid()
    };

    const bootstrapCard = {
      id: uuid(),
      colorId: randomColor(),
      isEditing: false
    };

    const mergeCard = pack => assoc('cards', pack.cards.map((card => merge(card, bootstrapCard))), pack);
    const mergePack = pack => merge(pack, bootstrapPack);
    const settingNewPacks = packs => compose(mergeCard, mergePack)(packs);

    const onReaderLoad = event => {
      const packLoaded = JSON.parse(event.target.result);
      const packages = packLoaded.map(settingNewPacks);
      dispatch(importPackage(packages));
    };

    const handleOnChange = (e) => {
      const reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.readAsText(e.target.files[0]);
    };

    return (
      <section className="importPack">
				<label htmlFor="input-import">
          <svg className="import-icon">
            <use xlinkHref="#icon-import"></use>
          </svg>
        </label>
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
