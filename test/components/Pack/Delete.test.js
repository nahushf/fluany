import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Delete from 'components/Pack/Delete'

describe('Pack/ <Delete />', () => {
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

  it('should render the Delete component', () => {
  })
})
