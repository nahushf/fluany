import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Cards from 'components/Card/Cards'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Card/ <Cards />', () => {
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
      indexOfPack: 0, /* 3 cards in pack */
      packageid: 0
    }

    wrapper = mount(
      <Provider store={store}>
        <Cards {...CardProps} />
      </Provider>
    )
  })

  it('should render the Cards component', () => {
    expect(wrapper.find('ul')).to.have.length(1)
    expect(wrapper.find('li')).to.have.length(3)
    expect(wrapper.find('CreateCard')).to.have.length(1)
  })
})
