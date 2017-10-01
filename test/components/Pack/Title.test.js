import React from 'react'
import TitlePack from '../../../src/popup/components/Pack/TitlePack'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

describe('Pack/ <TitlePack />', () => {
  const mockStore = configureMockStore([])
  let mock = { title: 'It is a title', newTitle: '' }
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
    mock.newTitle = e.target.value
  }

  it('should render the TitlePack component', () => {
    wrapper = mount(
      <Provider store={store}>
        <TitlePack onChange={handleOnChange} title={mock.title} />
      </Provider>
    )
    expect(wrapper.find('svg')).to.have.length(1)
  })

  it('should change title input', () => {
    const input = wrapper.find('textarea')
    input.simulate('focus')
    input.simulate('change', { target: { value: 'changed' } })
    expect(mock.newTitle).to.equal('changed')
  })
})
