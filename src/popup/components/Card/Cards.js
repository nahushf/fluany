/**
 * @fileOverview The component to list all cards (Back and front)
 * @name Cards.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import { connect } from 'react-redux'
import Card from 'components/Card'
import { getIndexThingById } from 'reducers/stateManipulate.js'
import CreateCard from './CreateCard'

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
    func, number, array, string
} = React.PropTypes

/**
 * PropTypes
 * @property {Function} The result from `store.dispatch()`
 * @property {Array} All the packs availables
 * @property {Number} The index of pack to change
 * @property {Number} The position(index) of pack that is using
 */
Cards.propTypes = {
  dispatch: func.isRequired,
  packs: array.isRequired,
  packageid: string.isRequired,
  indexOfPack: number.isRequired
}

export default connect(mapStateToProps)(Cards)
