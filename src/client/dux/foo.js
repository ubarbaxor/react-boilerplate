// import R from 'ramda'

// Exported in case FOO_ACTION is needed in another dux
export const FOO_ACTION = 'FOO_ACTION';

// Action creators
// Exported to be used in mapDispatchToProps() call
export const setFoo = foo => ({
  type: FOO_ACTION,
  payload: foo
})

// Local only - reducer default falue, used to build state on init
const fallback = 'bar'

// the actual fooReducer, exported by default, readu to combine
const reducer = (state = fallback, action) => {
  switch (action.type) {
    case FOO_ACTION:
      return action.foo
    default:
      return state;
  }
}

export default reducer
