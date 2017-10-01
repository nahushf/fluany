import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import Card from 'components/Card'
import { getIndexThingById } from 'reducers/stateManipulate.js'
import CreateCard from './CreateCard'

/**
 * A component to list store's packs
 *
 * @param  {Function} dispatch   The result from `store.dispatch()`
 * @param  {Array} packs   Store's packs
 * @param  {Number} idPackage   Is package's id that is using.
 * @return {Component}
 */
const Cards = ({
    dispatch,
    packs,
    packageid,
    indexOfPack
}) => {
  const packProps = {packageid, indexOfPack}
  const cardMap = (card, index) => <Card key={index} {...card} {...packProps} />
  return (
    <section>
      <ul className='card-content'>
        <CreateCard {...packProps} packs={packs} dispatch={dispatch} />
        { packs[getIndexThingById(packs, packageid)].cards.map(cardMap) }
      </ul>
    </section>
  )
}

const mapStateToProps = (
    state
) => {
  return {
		    packs: state.packs
  }
}

const {
    func, number, array
} = React.PropTypes

Cards.propTypes = {
  dispatch: func.isRequired,
  packs: array.isRequired,
  indexOfPack: number.isRequired
}

export default connect(mapStateToProps)(Cards)
