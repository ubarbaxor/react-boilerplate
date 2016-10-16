import { combineReducers } from 'redux'

import foo from './foo'
import baz from './baz'

const reducer = combineReducers({
  foo,
  baz
})

export default reducer
