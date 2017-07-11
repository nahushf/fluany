import React from 'react';
import { connect } from 'react-redux';
import { isEditPackage } from '../../actions/flags';
import Play  from '../Play/Play';
import Palette from '../Palette/Palette';
import TitlePack from './TitlePack';
import Setting from '../Setting/Setting';
import DescriptionPack from './DescriptionPack';
import Delete from './Delete';
import Progress from './Progress';
import * as translator from '../../../shared/constants/internacionalization';
import { changePackageTitle,
         changePackageDescription,
         changePackageColor,
         allNoEditingCard } from '../../actions/pack';

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
    timeMinutes,
    playing,
    percentage,
    colorProgress,
    colorID,
    cards,
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

    const handleEditTitle = e => {
        e.stopPropagation();
        inRefToTitle.removeAttribute('disabled')
        inRefToTitle.focus();
    }

    const refToComponentTitle = input =>{
        inRefToTitle = input;
    }

    const propsDefault = {
        packageid: id,
        dispatch
    }

    return (
            <li className={"pack-item color-" + colorID}
                onClick={handleClickItem}
                onMouseLeave={handleOnMouseLeave}>
                <Progress {...propsDefault}
                          colorProgress={colorProgress ? colorProgress : ''}
                          percentage={percentage ? percentage : 0}
                          cards={cards} />

                <TitlePack onChange={handlePackageTitle}
                           refToComponent={refToComponentTitle}
                           onFocus="true"
                           disabled="true"
                           handleEditTitle={handleEditTitle}
                           title={title}/>

                <Play packageid={id}
                      playing={playing}
                      title={title}
                      cards={cards}
                      percentage={percentage ? percentage : 0}
                      interval={timeMinutes}
                      dispatch={dispatch}/>
                <a className="show-pack">{ translator.PACK_SHOW_LIST }</a>
                <Palette {...propsDefault} isChanging={isChangingColor} />
                <Delete {...propsDefault}/>
            </li>
    );
}

const {
    func, number, bool, string, array
} = React.PropTypes;

Pack.propTypes = {
    dispatch: func.isRequired,
    title: string.isRequired,
    timeMinutes: number.isRequired,
    percentage: number,
    colorProgress: string,
    colorID: number.isRequired,
    cards: array.isRequired,
    isChangingColor: bool.isRequired,
}

export default connect()(Pack);

