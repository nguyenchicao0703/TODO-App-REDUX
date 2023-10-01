import { createStore } from 'redux';

const store = createStore(rootReducer, initValue, enhancers);

export default store;