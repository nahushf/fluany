import React from 'react';
import { connect } from 'react-redux';
import { changeFilterPackage, toggleActiveSearch } from '../../actions/flags';
let Search = ({
    dispatch,
    filterPackage,
    isActiveSearch }) => {

    let refToSearch = '';
    const handleChangeFilter = e => {
        dispatch(changeFilterPackage(e.target.value));
    };

    const handleClickSearch = () => {
        refToSearch.focus();
        dispatch(toggleActiveSearch());
    }

    return (
        <section className={"search-content " + (isActiveSearch ? "search-active":"")}>
            <svg className="search-icon" onClick={handleClickSearch}>
                <use xlinkHref="#icon-search"></use>
            </svg>
            <input type="search"
                className="search-input"
                placeholder="Pesquisar"
                onChange={handleChangeFilter}
                ref={(input) => { refToSearch = input; }}
                value={filterPackage}></input>
        </section>
    );
}

const mapStateToProps = (
    state
) => {
    return {
        filterPackage: state.flags.filterPackage,
        isActiveSearch: state.flags.isActiveSearch
    };
};

const {
    func, bool, string
} = React.PropTypes;

Search.propTypes = {
    dispatch: func.isRequired,
    filterPackage: string,
    isActiveSearch: bool
}

export default connect(mapStateToProps)(Search);
