import { createStore } from 'redux';

import accountReducer from '../reducers/accountReducer';

const store = createStore(accountReducer);

export default store;
