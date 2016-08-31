import R from 'ramda'

const fallback = {
  placeHolder: 'value',
}


const reducer = (state = fallback, action) => {
  console.log(fallback);
  return state
}

export default reducer
