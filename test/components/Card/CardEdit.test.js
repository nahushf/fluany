import React from 'react'
import CardEdit from '../../../src/popup/components/Card/CardEdit'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import packsDefaultStore from '../../../src/popup/store/packsDefaultStore'

describe('Card/ <CardEdit />', () => {
  const mockStore = configureMockStore([])
  let store
  let wrapper
  beforeEach(() => {
    store = mockStore({
      packs: packsDefaultStore,
      flags: {
        isCreatingPackage: true,
        filterPackage: '',
        isActiveSearch: false,
        paginationPackage: 3,
        isEditPackage: {newPackage: false, packageid: null},
        newPackage: {title: '', description: ''}
      }
    })

    const CardProps = {
      packs: packsDefaultStore,
      indexOfPack: 0,
      indexOfCard: 0,
      packageid: 0
    }

    wrapper = mount(
      <Provider store={store}>
        <CardEdit {...CardProps} />
      </Provider>
    )
  })

  it('should render the CardEdit component', () => {
    expect(wrapper.find('input')).to.have.length(2)
    expect(wrapper.find('.card-edit-container')).to.have.length(1)
    expect(wrapper.find('.card-edit-content')).to.have.length(2)
  })
})
