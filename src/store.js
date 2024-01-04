import {createStore} from 'redux';
// import {configureStore} from '@reduxjs/toolkit';

import reducer from './reducers'

const store = createStore(reducer)

export default store