import React from 'react'
import Either from 'components/Either'

describe('Either/ <Either />', () => {
  it('should render the Right of the <Either />', () => {
    const enzymeWrapper = shallow(
        <Either when={true}
                left={<div>A</div>}
                right={<div>B</div>}/>
    )
    expect(enzymeWrapper.find('div').text()).toEqual('B')
  })

  it('should render the Left of the <Either />', () => {
    const enzymeWrapper = shallow(
        <Either when={false}
                left={<div>A</div>}
                right={<div>B</div>}/>
    )
    expect(enzymeWrapper.find('div').text()).toEqual('A')
  })
})
