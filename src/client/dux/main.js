const LOG = 'Just log this action'
const SAVE = 'Save this action'
const LOG_PAYLOAD = 'Just log this action\'s payload'

const DEFAULT = {
  lastAction: null,
  history: []
}

const reducer = (state = DEFAULT, action) => {
  switch (action.type) {
    case SAVE:
      console.log('Saving action', action)
      return {
        lastAction: action,
        history: [...state.history, action]
      }
    case LOG:
      console.log(action.payload)
    case LOG_PAYLOAD:
      console.log(action.payload)
    default:
      return ({
        ...state,
        lastAction: action
      })
  }
}

export default reducer
