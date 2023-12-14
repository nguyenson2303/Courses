import { SET_PRODUCT, ADD_PRODUCT, REMOVE_PRODUCT } from './constants'

export const setProduct = payload => ({
    type: SET_PRODUCT,
    payload
})

export const addProduct = payload => ({
    type: ADD_PRODUCT,
    payload
})

export const removeProduct = payload => ({
    type: REMOVE_PRODUCT,
    payload
})
