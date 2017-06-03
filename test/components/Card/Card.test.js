import React from 'react';
import Card from '../../../src/popup/components/Card/Card';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import packsDefaultStore from '../../../src/popup/store/packsDefaultStore';

describe('Card/ <Card />', () => {
  const mockStore = configureMockStore([]);
  let store;
  let wrapper;
  beforeEach(() => {
    store = mockStore({
      packs: packsDefaultStore,
      flags: {
        isCreatingPackage: true,
        filterPackage: "",
        isActiveSearch: false,
        paginationPackage: 3,
        isEditPackage: {newPackage: false, packageid: null},
        newPackage: {title: "", description: ""}
      }
    });

    const CardProps = {
      index: 0,
      indexOfPack: 0,
      colorID: 1,
      packageid: 0,
      id: 0
    };

    wrapper = mount(
        <Provider store={store}>
          <Card {...CardProps} />
        </Provider>
    );

  });

  it('should render the Card component', () => {
    expect(wrapper.find('CardEdit')).to.have.length(1);
    expect(wrapper.find('.card-item-block')).to.have.length(1);
    expect(wrapper.find('.card-item')).to.have.length(1);
    expect(wrapper.find('button')).to.have.length(2);
    expect(wrapper.find('TooltipCard')).to.have.length(1);
  });

});
