import React from 'react'
import Title from 'components/Pack/TitlePack'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Pack/ <Title />', () => {
  const onChange = jest.fn()
  function setup(onChange) {
    const props = {
        onChange,
        title: 'I am a title'
    }

    const enzymeWrapper = shallow(
        <Title {...props} />
    )

    return {
        props,
        enzymeWrapper
    }
  }

  it('should render the TitlePack component', () => {
    const { enzymeWrapper } = setup(onChange)
    expect(enzymeWrapper.find('svg')).toHaveLength(1)
  })

  it('should change title input', () => {
    const { enzymeWrapper } = setup(onChange)
    const input = enzymeWrapper.find('textarea')
    input.simulate('focus')
    input.simulate('change', 'newvalue')
    expect(onChange).toBeCalledWith('newvalue');
  })
})
