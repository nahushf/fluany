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

  it('should render the DescriptionPack component', () => {
  })
})
