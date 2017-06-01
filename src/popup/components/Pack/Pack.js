import React from 'react';
import { connect } from 'react-redux';
import { changePackageTitle,
         changePackageDescription } from '../../actions/pack';
import Play  from '../Play/Play';
import Palette from '../Palette/Palette';
import TitlePack from './TitlePack';
import Setting from '../Setting/Setting';
import DescriptionPack from './DescriptionPack';
import { isEditPackage } from '../../actions/flags';
import Delete from './Delete';

/**
 * A component to see Pack information
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {String} title   The package's title
 * @param  {Number} id   The package's id to change on Store
 * @param  {Number} colorID   The package's colorid to change package to color
 * @param  {Boolean} isChangingColor   A flag to know if package is wanting changing color
 * @return {Component}
 */

let Pack = ({
    dispatch,
    title,
    id,
    colorID,
    isChangingColor,
    isSetting }) => {
    let inRefToTitle = '';
    const handlePackageTitle = e => {
        dispatch(changePackageTitle(id, e.target.value));
    }

    const handleClickItem = () => {
        const anyThingFocused = document.activeElement;
        if(!anyThingFocused || anyThingFocused === document.body) //check if any element is focused
            dispatch(isEditPackage({newPackage: false, packageid: id}))
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
            <li className={"pack-item color-" + colorID} onClick={handleClickItem}>
                <TitlePack onChange={handlePackageTitle}
                           refToComponent={refToComponentTitle}
                           onFocus="true"
                           disabled="true"
                           handleEditTitle={handleEditTitle}
                           title={title}/>
                <Play />
                <a className="show-pack">Ver Lista</a>
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
    description: string.isRequired,
    id: number.isRequired,
    colorID: number.isRequired,
    isChangingColor: bool.isRequired
}

export default connect()(Pack);

