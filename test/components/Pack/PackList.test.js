import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import PackList from 'components/Pack/PackList'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Pack/ <PackList />', () => {
  const mockStore = configureMockStore([])
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

    const PackProps = {
      packs: packsDefaultStore,
      filterPackage: ''
    }

    wrapper = mount(
      <Provider store={store}>
        <PackList {...PackProps} />
      </Provider>
    )
  })

  it('should render the PackList component', () => {
    expect(wrapper.find('.pack-container')).to.have.length(1)
    expect(wrapper.find('.packs-content')).to.have.length(1)
    expect(wrapper.find('svg')).to.have.length(1)
    expect(wrapper.find('Create')).to.have.length(1)
    expect(wrapper.find('MorePackage')).to.have.length(1)
  })
})
