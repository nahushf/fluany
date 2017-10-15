/**
 * @fileOverview The component to list all cards (Back and front)
 * @name Cards.js
 * @author <a href="https://github.com/victorvoid">Victor Igor</a>
 * @license MIT
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getIndexThingById } from 'reducers/stateManipulate.js'
import Card from 'components/Card'
import CreateCard from './CreateCard'

export const Cards = ({
  packs,
  packageid,
  indexOfPack
}) => {

  const cardMap = (card, index) => <Card {...{ key: index, card, packs, packageid, indexOfPack }}/>
  return (
    <section>
      <ul className='card-content'>
        <CreateCard {...{ packs, packageid, indexOfPack }} />
        { packs[getIndexThingById(packs, packageid)].cards.map(cardMap) }
      </ul>
    </section>
  )
}

const {
  number, array, string
} = PropTypes

/**
 * PropTypes
 * @property {Array} packs All the packs availables
 * @property {Number} packageid The index of pack to change
 * @property {Number} indexOfPack The position(index) of pack that is using
 */
Cards.propTypes = {
  packs: array.isRequired,
  packageid: string.isRequired,
  indexOfPack: number.isRequired
}

export default connect()(Cards)
