import { createStore, applyMiddleware } from 'redux';
import devTools from 'remote-redux-devtools';
import rootReducer from 'reducers/index';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, devTools({
        realtime: true
    }));
    return store;
}
