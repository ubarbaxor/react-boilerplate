import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Analytics from './helpers/analytics'

import App from './containers/app'

import reducer from './dux/main'

// createStore(reducer, [preloadedState], [enhancer])
const rootStore = createStore(reducer)

render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('app'))
