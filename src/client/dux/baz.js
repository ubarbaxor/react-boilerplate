// import R from 'ramda'

// Exported in case baz_ACTION is needed in another dux
export const BAZ_ACTION = 'BAZ_ACTION';

// Action creators
// Exported to be used in mapDispatchToProps() call
export const setbaz = baz => ({
  type: BAZ_ACTION,
  payload: baz
})

// Local only - reducer default falue, used to build state on init
const fallback = 'fubar'

// the actual bazReducer, exported by default, readu to combine
const reducer = (state = fallback, action) => {
  switch (action.type) {
    case BAZ_ACTION:
      return action.baz
    default:
      return state;
  }
}

export default reducer
