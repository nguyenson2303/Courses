function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type) // console.group(action.type) sẽ nhóm lại theo action.type.

    console.log("Prev State: ", prevState)

    console.log("Action: ", action)

    const newState = reducer(prevState, action)

    console.log("New State: ", newState)

    console.groupEnd()

    return newState
  }
}

export default logger
