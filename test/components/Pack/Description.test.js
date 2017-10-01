import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import DescriptionPack from 'components/Pack/DescriptionPack'

describe('Pack/ <DescriptionPack />', () => {
  const mockStore = configureMockStore([])
  let mock = {description: 'It is a description', newDescription: ''}
  let store
  let wrapper
  beforeEach(() => {
    store = mockStore({
      packs: [],
      flags: {
        isCreatingPackage: true,
        filterPackage: '',
        isActiveSearch: false,
        paginationPackage: 3,
        isEditPackage: {newPackage: false, packageid: null},
        newPackage: {title: '', description: ''}
      }
    })
  })

  const handleOnChange = (e) => {
    mock.newDescription = e.target.value
  }

  it('should render the DescriptionPack component', () => {
    wrapper = mount(
      <Provider store={store}>
        <DescriptionPack onChange={handleOnChange} description={mock.description} />
      </Provider>
    )
    expect(wrapper.find('svg')).to.have.length(1)
  })

  it('should change description input', () => {
    const input = wrapper.find('textarea')
    input.simulate('focus')
    input.simulate('change', { target: { value: 'changed' } })
    expect(mock.newDescription).to.equal('changed')
  })
})
