import React from 'react'
import { MorePackage } from 'components/Pack/MorePakage'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Pack/ <More />', () => {
  function setup() {
    const onChangePagination = jest.fn()
    const props = {
        packs: packsDefaultStore,
        filterPackage: '',
        paginationPackage: 1,
        onChangePagination
    }

    const enzymeWrapper = shallow(
        <MorePackage {...props} />
    )

    return {
        props,
        enzymeWrapper
    }
  }

  it('should render the MorePackage component', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('button')).toHaveLength(1)
  })
})
