import React from 'react';
import { connect } from 'react-redux';
import { getIndexThingById } from '../../reducers/stateManipulate';

let ExportPack = ({
    packs,
    id,
    icon,
    isPack
}) => {
  let linkA = '';
  const indexOfThePack = getIndexThingById(packs, id);
  const handleClick = (e) => {
    e.stopPropagation();
    const packToGenerate = isPack ? [packs[indexOfThePack]] : packs;
    const packsGenerated = JSON.stringify(packToGenerate);
    const file = new Blob([packsGenerated], {type: 'application/json'});
    const nameFile = isPack ? `${packs[indexOfThePack].title} - fluany.flu` : 'all-packages.flu';
    linkA.href = URL.createObjectURL(file);
    linkA.download = nameFile;
  };

  return (
    <section className="exportPack" onClick={handleClick}>
        <a ref={a => { linkA = a }}>
            <svg className="export-icon">
                <use xlinkHref={`#icon-export-${icon}`}></use>
            </svg>
        </a>
    </section>
  );
};

const mapStateToProps = (
  state
) => {
  return {
      packs: state.packs
  };
};

const {
    string, array
} = React.PropTypes;

ExportPack.propTypes = {
    packs: array.isRequired,
    icon: string.isRequired
};

export default connect(mapStateToProps)(ExportPack);
