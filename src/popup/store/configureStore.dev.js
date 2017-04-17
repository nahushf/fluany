import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import devTools from 'remote-redux-devtools';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, devTools({
        realtime: true
    }));
    return store;
}
