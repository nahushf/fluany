import React from 'react'
import Description from 'components/Pack/DescriptionPack'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Pack/ <Description />', () => {
  const onChange = jest.fn()
  function setup(onChange) {
    const props = {
        onChange,
        description: 'I am a description'
    }

    const enzymeWrapper = shallow(
        <Description {...props} />
    )

    return {
        props,
        enzymeWrapper
    }
  }

  it('should render the DescriptionPack component', () => {
    const { enzymeWrapper } = setup(onChange)
    expect(enzymeWrapper.find('svg')).toHaveLength(1)
  })

  it('should change description input', () => {
    const { enzymeWrapper } = setup(onChange)
    const input = enzymeWrapper.find('textarea')
    input.simulate('focus')
    input.simulate('change', 'newvalue')
    expect(onChange).toBeCalledWith('newvalue');
  })
})
