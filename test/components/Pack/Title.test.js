import React from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import TitlePack from 'components/Pack/TitlePack'

describe('Pack/ <TitlePack />', () => {
  const mockStore = configureMockStore([])
  let mock = { title: 'It is a title', newTitle: '' }
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
  it('should render the TitlePack component', () => {
  })
})
