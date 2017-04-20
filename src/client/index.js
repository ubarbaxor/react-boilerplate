import React from 'react'
import { render } from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

// import * as reducers from './dux/index'
// const rootReducer = combineReducers(reducers)
import { reducer } from './dux/placeholder'

import App from './components/app'

//createStore(reducer, [preloadedState], [enhancer])
import { store } from './dux/placeholder'

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app'));
