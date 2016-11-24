const LOG = 'Just log this action'
const SAVE = 'Save this action'
const LOG_PAYLOAD = 'Just log this action\'s payload'

const INIT = {
  lastAction: null,
  history: []
}

const reducer = (state = INIT, action) => {
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
        lastAction: action,
        actionsHistory: state.history
      })
  }
}

export default reducer
