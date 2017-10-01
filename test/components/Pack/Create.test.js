import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Create from 'components/Pack/Create'
import thunk from 'redux-thunk'

describe('Pack/ <Create />', () => {
  const mockStore = configureMockStore([thunk])
  let store
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

  it('should render the Create component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Create />
      </Provider>
        )
    expect(wrapper.find('button')).to.have.length(1)
    expect(wrapper.find('input')).to.have.length(1)
  })
})
