import React from 'react'
import { render } from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'


import App from './components/app'

import reducer from './dux/main'

//createStore(reducer, [preloadedState], [enhancer])
const rootStore = createStore(reducer);

render(
  <Provider store={rootStore}>
    <App/>
  </Provider>,
  document.getElementById('app'));
