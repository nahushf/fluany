import React from 'react';
import { connect } from 'react-redux';
import { changePackageTitle,
         changePackageDescription,
         changePackageColor,
         allNoEditingCard } from '../../actions/pack';
import Play  from '../Play/Play';
import Palette from '../Palette/Palette';
import TitlePack from './TitlePack';
import Setting from '../Setting/Setting';
import DescriptionPack from './DescriptionPack';
import { isEditPackage } from '../../actions/flags';
import Delete from './Delete';
import Progress from './Progress';

/**
 * A component to see Pack information
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {String} title   The package's title
 * @param  {Number} id   The package's id to change on Store
 * @param  {Number} colorID   The package's colorid to change package to color
 * @return {Component}
 */

let Pack = ({
    dispatch,
    title,
    id,
    playing,
    colorID,
    isChangingColor,
    isSetting }) => {
    let inRefToTitle = '';
    const handlePackageTitle = e => {
        dispatch(changePackageTitle(id, e.target.value));
    }

    const handleClickItem = () => {
        const anyThingFocused = document.activeElement;
        if(!anyThingFocused || anyThingFocused === document.body){ //check if any element is focused
            dispatch(isEditPackage({newPackage: false, packageid: id}))
            dispatch(allNoEditingCard(id))
        }
    }

    const handleOnMouseLeave = () => {
        dispatch(changePackageColor(false, id));
    }

    const handleEditTitle = (e) => {
        e.stopPropagation();
        inRefToTitle.removeAttribute('disabled')
        inRefToTitle.focus();
    }

    const refToComponentTitle = (input) =>{
        inRefToTitle = input;
    }

    return (
            <li className={"pack-item color-" + colorID}
                onClick={handleClickItem}
                onMouseLeave={handleOnMouseLeave}>
                <Progress />
                <TitlePack onChange={handlePackageTitle}
                           refToComponent={refToComponentTitle}
                           onFocus="true"
                           disabled="true"
                           handleEditTitle={handleEditTitle}
                           title={title}/>
                <Play packageid={id} playing={playing} dispatch={dispatch}/>
                <a className="show-pack">Ver Lista</a>
                <Palette dispatch={dispatch} isChanging={isChangingColor} packageid={id} />
                <Delete dispatch={dispatch} packageid={id}/>
            </li>
    );
}

const {
    func, number, bool, string
} = React.PropTypes;

Pack.propTypes = {
    dispatch: func.isRequired,
    title: string.isRequired,
    id: number.isRequired,
    colorID: number.isRequired
}

export default connect()(Pack);

