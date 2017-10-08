import React from 'react'
import { Cards } from 'components/Card/Cards'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Card/ <Cards />', () => {
  function setup() {
    const props = {
        packs: packsDefaultStore,
        packageid: '1',
        indexOfPack: 0
    }

    const enzymeWrapper = shallow(
        <Cards {...props} />
    )

    return {
        props,
        enzymeWrapper
    }
  }

  it('should render the Cards component', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('ul')).toHaveLength(1)
  })
})
