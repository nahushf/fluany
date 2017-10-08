import React from 'react'
import { Card } from 'components/Card'
import { isEditingCard, removeCard, allNoEditingCard } from 'actions/pack'
import { changeCard } from 'actions/flags'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Card/ <Card />', () => {
  function setup() {
    const props = {
        onChangeCard: changeCard,
        onAllNoEditingCard: allNoEditingCard,
        onEditingCard: isEditingCard,
        onRemoveCard: removeCard,
        card: { front: 'front card', back: 'back card', colorID: 1},
        packs: packsDefaultStore,
        cardEditing: { front: null, back: null },
        indexOfPack: 0,
    }

    const enzymeWrapper = shallow(
        <Card {...props} />
    )

    return {
        props,
        enzymeWrapper
    }
  }

  it('should render the Card component', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.card-item').hasClass('no-editing')).toBe(true)
    expect(enzymeWrapper.find('button')).toHaveLength(2)
    expect(enzymeWrapper.find('TooltipCard')).toHaveLength(1)
  })
})
