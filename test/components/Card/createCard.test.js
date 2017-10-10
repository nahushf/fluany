import React from 'react'
import { CreateCard } from 'components/Card/CreateCard'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Card/ <CreateCard />', () => {
  const onCreateCard = jest.fn()
  function setup(onCreateCard) {
    const props = {
      onCreateCard,
      packageid: '1',
      indexOfPack: 0,
      packs: packsDefaultStore
    }

    const enzymeWrapper = shallow(
        <CreateCard {...props} />
    )

    return {
      props,
      enzymeWrapper
    }
  }

  it('should render the CreateCard component', () => {
    const { enzymeWrapper } = setup(onCreateCard)
    expect(enzymeWrapper.find('.card-item-block')).toHaveLength(1)
  })

  it('should change function on click', () => {
    const { enzymeWrapper } = setup(onCreateCard)
    const input = enzymeWrapper.find('.card-item')
    input.simulate('click')
    expect(onCreateCard).toBeCalled();
  })
})
