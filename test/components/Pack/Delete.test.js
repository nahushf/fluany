import React from 'react';
import Delete from '../../../src/popup/components/Pack/Delete';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

describe('Pack/ <Delete />', () => {
    const mockStore = configureMockStore([]);
    let store;
    beforeEach(() => {
        store = mockStore({
            packs: [],
            flags: {
                isCreatingPackage: true,
                filterPackage: "",
                isActiveSearch: false,
                paginationPackage: 3,
                isEditPackage: {newPackage: false, packageid: null},
                newPackage: {title: "", description: ""}
            }
        });
    });

    it('should render the Delete component', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Delete />
            </Provider>
        );
        expect(wrapper.find('svg')).to.have.length(1);
    });
});
