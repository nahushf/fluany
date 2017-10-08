import React from 'react'
import { Delete } from 'components/Pack/Delete'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Pack/ <Delete />', () => {
  function setup() {
    const onRemovePackage = jest.fn()
    const onChangeMessage = jest.fn()
    const props = {
        onRemovePackage,
        onChangeMessage,
        packageid: '1',
        playing: false
    }

    const enzymeWrapper = shallow(
        <Delete {...props} />
    )

    return {
        props,
        enzymeWrapper
    }
  }


  it('should render the Delete component', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('svg')).toHaveLength(1)
  })
})
