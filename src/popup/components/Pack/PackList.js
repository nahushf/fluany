import React from 'react';
import { connect } from 'react-redux';
import { filter, toLower, take, compose } from 'ramda';
import Create from './Create';
import MorePackage from './MorePakage';
import Pack from './';

/**
 * A component to list store's packs
 *
 * @param  {Array} packs   Store's packs
 * @return {Component}
 */
let PackList = ({
    packs,
    filterPackage
    }) => {
    return (
        <section className="pack-container">
				    <ul className="packs-content">
                { filterPackage === "" ? <Create/> : null }
                {packs.map(pack =>
                        <Pack
                         key={pack.id}
                         {...pack}/>
                 )}
				    </ul>
            <MorePackage/>
            <svg className="fish-2">
                <use xlinkHref="#fish-2"></use>
            </svg>
            <svg className="fish-2 bro">
                <use xlinkHref="#fish-2"></use>
            </svg>
        </section>
    );
}


/**
 * A function to take the packages in accordance with the store's pagination
 *
 * @param  {Array} packs        Store's packs
 * @return {Number} pagination  Store's pagination
 */
const getVisiblePackages = (
    packs,
    pagination,
    filterPackage
) => {
    if(filterPackage === ""){
        return take(pagination, packs);
    }
    return packs;
}


/**
 * A function to filter packages in accordance with the store's filter
 *
 * @param  {Array} packs           Store's packs
 * @return {String} filterPackage  Store's filterPackage
 */
const getSearchPackages = (
    packs,
    filterPackage
) => {
    if(filterPackage !== ""){
        return filter(pack => {
                    let title = toLower(pack.title);
                    let description = toLower(pack.description);

                    return title.indexOf(filterPackage) != -1
                        || description.indexOf(filterPackage) != -1;

                }, packs);
    }

    return packs;
}

const mapStateToProps = (
  state
) => ({
      packs: getVisiblePackages(
                getSearchPackages(state.packs, state.flags.filterPackage),
                state.flags.paginationPackage, state.flags.filterPackage
      ),
    filterPackage: state.flags.filterPackage
    }
);


const {
  array
} = React.PropTypes;

PackList.propTypes = {
    packs: array.isRequired
};

export default connect(
    mapStateToProps)(PackList);
