import { ADD_PRODUCT, SET_PRODUCT, REMOVE_PRODUCT } from "./constants";

const initState = {
    products: [],
    productInput: ''
}

function reducer(state, action) {

    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                productInput: action.payload
            }

        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case REMOVE_PRODUCT:
            const newProducts = [...state.products]
            newProducts.splice(action.payload, 1)
            return {
                ...state,
                products: newProducts
            }

        default:
            throw new Error('Invalid Action...')
    }
}

export { initState }
export default reducer