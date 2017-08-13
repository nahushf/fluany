import React from 'react';
import { connect } from 'react-redux';

let ExportPack = ({
    packs,
    id
}) => {

  const handleClick = () => {
    let a = document.getElementById("packExport");
    const packsGenerated = JSON.stringify(packs);
    const file = new Blob([packsGenerated], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = 'fluany_packs.flu';
  };

  return (
    <section className="exportPack" onClick={handleClick}>
        <a id="packExport">
            <svg className="export-icon">
                <use xlinkHref="#icon-export"></use>
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
    func, array
} = React.PropTypes;

ExportPack.propTypes = {
    packs: array.isRequired
};

export default connect(mapStateToProps)(ExportPack);
