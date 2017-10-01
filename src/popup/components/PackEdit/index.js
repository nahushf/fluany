import React from 'react'
import { connect } from 'react-redux'
import { assoc, isNil } from 'ramda'
import TitlePack from 'components/Pack/TitlePack'
import DescriptionPack from 'components/Pack/DescriptionPack'
import Cards from 'components/Card/Cards'
import Time from './Time'
import Play from 'components/Play'
import * as translator from 'shared/constants/internacionalization'
import { changePackageTitle,
         changePackageDescription } from 'actions/pack'
import { newPackage, isEditPackage } from 'actions/flags'
import { getIndexThingById } from 'reducers/stateManipulate'

let PackEdit = ({
    dispatch,
    isEdit,
    loading,
    packflag,
    packs
}) => {
  let inRefToTitle = ''
  const handlePackTitle = e => {
    dispatch(changePackageTitle(isEdit.packageid, e.target.value))
  }

  const handleComeBack = () => {
    dispatch(isEditPackage({newPackage: false, packageid: null}))
  }

  const indexOfPack = getIndexThingById(packs, isEdit.packageid)

  const refToComponentTitle = (input) => { inRefToTitle = input }

  const handleFocusTitle = () => {
    inRefToTitle.style.cursor = 'auto'
  }

  const titleProps = {
    onChange: handlePackTitle,
    title: (!isNil(isEdit.packageid)
            ? packs[indexOfPack].title
          : packflag.title),
    refToComponent: (el) => {}
  }

  const Container = () => (
    <section className='config-package'>
      <nav>
        <button className='btn btn-back' onClick={handleComeBack}>
          <svg className='arrow-back'>
            <use xlinkHref='#icon-arrow' />
          </svg>
          {translator.BACK_LABEL}
        </button>
      </nav>
      <div>
        <div className={'load-packages-container' + (loading ? ' loading' : '')} />
        <TitlePack {...titleProps} />
        <Time packageid={isEdit.packageid} />
        <Cards indexOfPack={indexOfPack} packageid={isEdit.packageid} />
      </div>
    </section>
  )

  return isEdit ? Container() : (<div />)
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

const {
    func, bool, object, array
} = React.PropTypes

PackEdit.propTypes = {
  dispatch: func.isRequired,
  isEdit: object.isRequired,
  packflag: object.isRequired,
  packs: array.isRequired,
  loading: bool.isRequired
}

export default connect(mapStateToProps)(PackEdit)
