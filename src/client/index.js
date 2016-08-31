import React from 'react'
import { render } from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'


import App from './components/app'

// import * as reducers from './dux/index'
// const rootReducer = combineReducers(reducers)
import rootReducer from './dux/index'

//createStore(reducer, [preloadedState], [enhancer])
const rootStore = createStore(rootReducer);

render(
  <Provider store={rootStore}>
    <App/>
  </Provider>,
  document.getElementById('app'));