/**
 * @fileOverview A component to edit a specific package
 * @name index.js<PackEdit>
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as translator from 'shared/constants/internacionalization'
import isNil from 'ramda/src/isNil'
import TitlePack from 'components/Pack/TitlePack'
import Cards from 'components/Card/Cards'
import Time from './Time'
import Either from 'components/Either'
import { isEditPackage } from 'actions/flags'
import { getIndexThingById } from 'reducers/stateManipulate'
import {
  changePackageTitle,
  changePackageDescription
} from 'actions/pack'

let PackEdit = ({
  onChangePackageTitle,
  onChangePackageDescription,
  onIsEditPackage,
  isEdit,
  packflag,
  packs,
  loading
}) => {
  let inRefToTitle = ''
  const handlePackTitle = (e) => {
    onChangePackageTitle(isEdit.packageid, e.target.value)
  }

  const handleComeBack = () => {
    onIsEditPackage({ inewPackage: false, packageid: null })
  }

  const indexOfPack = getIndexThingById(packs, isEdit.packageid)

  const titleProps = {
    onChange: handlePackTitle,
    title: (!isNil(isEdit.packageid) ?
      packs[indexOfPack].title :
      packflag.title),
      refToComponent: (el) => {}
  }

  const Container = () => (
    <section className='config-package'>
      <nav>
        <button className='btn btn-back' onClick={handleComeBack}>
          <svg className='arrow-back'>
            <use xlinkHref='#icon-arrow' />
          </svg>
          { translator.BACK_LABEL }
        </button>
      </nav>
      <div>
        <div className={`load-packages-container ${loading ? 'loading' : ''}`} />
        <TitlePack {...titleProps} />
        <Time {...{ packs, packageid: isEdit.packageid }} />
        <Cards {...{ packs, indexOfPack, packageid: isEdit.packageid }} />
      </div>
    </section>
  )

  return <Either when={!!isEdit} right={Container()} left={<div/>} />
}

const mapStateToProps = (
  state
) => {
  return {
    isEdit: state.flags.isEditPackage,
    packflag: state.flags.newPackage,
    loading: state.flags.editPackageLoading,
    packs: state.packs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangePackageTitle: (...props) => dispatch(changePackageTitle(...props)),
    onChangePackageDescription: (...props) => dispatch(changePackageDescription(...props)),
    onIsEditPackage: (...props) => dispatch(isEditPackage(...props))
  }
}

const {
    func, bool, object, array
} = PropTypes

/**
 * PropTypes
 * @property {Function}  onChangePackageTitle  A action to change the package title
 * @property {Function}  onChangePackageDescription  A action to change the package description
 * @property {Function}  onIsEditPackage  A function to dispatch action to edit package
 * @property {Object}  isEdit  A flag to know if is editing any package
 * @property {Object}  packflag  A flag to know if is editing to new package or edit
 * @property {Array}  packs  All availables packages
 * @property {Boolean}  loading  A flag to know if container is loading
 */
PackEdit.propTypes = {
  onChangePackageTitle: func.isRequired,
  onChangePackageDescription: func.isRequired,
  onIsEditPackage: func.isRequired,
  isEdit: object.isRequired,
  packflag: object.isRequired,
  packs: array.isRequired,
  loading: bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(PackEdit)

