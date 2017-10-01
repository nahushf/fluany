import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import MorePackage from 'components/Pack/MorePakage'

describe('Pack/ <MorePackage />', () => {
  const mockStore = configureMockStore([])
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

  it('should render the MorePackage component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MorePackage />
      </Provider>
    )
    expect(wrapper.find('button')).to.have.length(1)
  })
})
