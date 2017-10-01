import React from 'react'
import Pack from '../../../src/popup/components/Pack/Pack'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

describe('Pack/ <Pack />', () => {
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
      title: 'English',
      id: 0,
      colorID: 1,
      isSetting: false
    }

    wrapper = mount(
      <Provider store={store}>
        <Pack {...PackProps} />
      </Provider>
    )
  })

  it('should render the Pack component', () => {
    expect(wrapper.find('TitlePack')).to.have.length(1)
    expect(wrapper.find('Play')).to.have.length(1)
    expect(wrapper.find('Delete')).to.have.length(1)
    expect(wrapper.find('.show-pack')).to.have.length(1)
  })
})
