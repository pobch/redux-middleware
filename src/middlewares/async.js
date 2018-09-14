export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    return next(action)
  }
  // action.payload is a pending promise:
  return action.payload.then(response => {
    dispatch({
      ...action,
      payload: response
    })
  })
}
