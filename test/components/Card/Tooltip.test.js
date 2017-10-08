import React from 'react'
import TooltipCard from 'components/Card/TooltipCard'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Card/ <TooltipCard />', () => {
  function setup() {
    const props = {
        back: 'it is a back phrase',
        color: 1,
        handleOnDelete: jest.fn()
    }

    const enzymeWrapper = shallow(
        <TooltipCard {...props} />
    )

    return {
        props,
        enzymeWrapper
    }
  }

  it('should render the TooltipCard component', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.tooltip-card')).toHaveLength(1)
    expect(enzymeWrapper.find('.card-back').text()).toEqual('it is a back phrase')
  })
})
