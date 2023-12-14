import reducer from "./reducer"

function logger () {
    return (prevState, actions) => {
        console.group(actions.type)

        console.log('Prev State: ', prevState)
        console.log('Actions:', actions)

        const newState = reducer(prevState, actions)
        console.groupEnd()

        return newState
    }
}

export default logger