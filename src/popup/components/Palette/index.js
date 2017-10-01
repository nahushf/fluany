import React from 'react';
import { connect } from 'react-redux';
import { changeColorID, changePackageColor } from 'actions/pack';

let Palette = ({
    dispatch,
    packageid,
    isChanging,
    colorID}) => {

    const handleChangeColor = (e, colorid) => {
        e.stopPropagation();
        dispatch(changeColorID(colorid, packageid));
        dispatch(changePackageColor(false, packageid));
    };

    const handleClickOnPalette = (e) => {
        e.stopPropagation();
        dispatch(changePackageColor(true, packageid));
    };

    const paletteColors = () => (
            <ul>
                <li>
                    <label onClick={(e) => handleChangeColor(e, 4)}
                        className={"color-4" + (colorID === 4 ?  " active": "")}></label>
                </li>
                <li>
                    <label onClick={(e) => handleChangeColor(e, 2)}
                        className={"color-2" + (colorID === 2 ?  " active": "")}></label>
                </li>
                <li>
                    <label onClick={(e) => handleChangeColor(e, 1)}
                        className={"color-1" + (colorID === 1 ?  " active": "")}></label>
                </li>
                <li>
                    <label onClick={(e) => handleChangeColor(e, 3)}
                        className={"color-3" + (colorID === 3 ?  " active": "")}></label>
                </li>
            </ul>
    );

    return (
        <section className={"palette-color" + (isChanging ? " changing-color": "")}>
            {paletteColors()}
            <svg className="brush-icon" onClick={handleClickOnPalette}>
                <use xlinkHref="#icon-brush"></use>
            </svg>
        </section>
    );
}

const {
    func, number, bool, string
} = React.PropTypes;

Palette.propTypes = {
    dispatch: func.isRequired,
    isChanging: bool.isRequired,
    colorID: number
}


export default connect()(Palette);
