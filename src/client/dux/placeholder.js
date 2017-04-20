// import R from 'ramda';
import { createStore } from 'redux'

const fallback = {
  placeHolder: 'value',
}


export const reducer = (state = fallback, action) => {
  switch (action.type) {
    case 'placeHolder':
      return ({ placeHolder: action.payload })
    default:
      return state
  }
}

export const store = createStore(reducer, fallback)

export const placeHolderAction = placeHolder => store.dispatch({
  type: 'placeHolder',
  payload: placeHolder
})
