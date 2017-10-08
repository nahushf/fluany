import React from 'react'
import { changeCard } from 'actions/flags'
import CardEdit from 'components/Card/CardEdit'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Card/ <CardEdit />', () => {
  function setup() {
    const props = {
        onChangeCard: changeCard,
        packs: packsDefaultStore,
        indexOfPack: 0,
        indexOfCard: 0,
        cardEditing: { front: null, back: null },
    }

    const enzymeWrapper = shallow(
        <CardEdit {...props} />
    )

    return {
        props,
        enzymeWrapper
    }
  }

  it('should render the CardEdit component', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('input')).toHaveLength(2)
    expect(enzymeWrapper.find('.card-edit-container')).toHaveLength(1)
    expect(enzymeWrapper.find('.card-edit-content')).toHaveLength(2)
  })
})
