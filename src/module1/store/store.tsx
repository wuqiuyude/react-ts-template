import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from '../reducers/index';
import thunk from 'redux-thunk';

const middleware = [thunk];
const composeEnhancers =  compose;
export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware)
));