import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import TooltipCard from 'components/Card/TooltipCard'
import packsDefaultStore from 'store/packsDefaultStore'

describe('Card/ <TooltipCard />', () => {
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
  })

  it('should render the TooltipCard component', () => {
  })
})
