import React from 'react'
import TooltipCard from '../../../src/popup/components/Card/TooltipCard'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import packsDefaultStore from '../../../src/popup/store/packsDefaultStore'

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

    const tooltipProps = {
      back: 'it is a back phrase'
    }

    wrapper = mount(
      <Provider store={store}>
        <TooltipCard {...tooltipProps} />
      </Provider>
    )
  })

  it('should render the TooltipCard component', () => {
    expect(wrapper.find('.tooltip-card')).to.have.length(1)
    expect(wrapper.find('.card-back').text()).to.equal('it is a back phrase')
  })
})
