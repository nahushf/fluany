import React from 'react';
import Create from '../../../src/popup/components/Pack/Create.js';
import { Provider } from 'react-redux';
import configureStore from '../../../src/popup/store/configureStore.prod.js';

describe('Pack/ <Create />', () => {
	const store = configureStore();
	let createComponent;
	beforeEach(() => {
		createComponent = render(
		  <Provider store={store}>
				<Create />
			</Provider>
		);
	});

	it('should render Button to create pack', () => {
		expect(createComponent.find('button')).to.have.length(1);
	});

	it('should render Input to create pack', () => {
		expect(createComponent.find('input')).to.have.length(1);
	});
});
