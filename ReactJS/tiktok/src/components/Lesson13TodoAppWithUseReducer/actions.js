// Bước 2: Actions
import { SET_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from "./constants"

export const setProduct = (payload) => {
  // Do Logic phức tạp, DOM element phải lấy được value (e.target.value) rồi truyền ngược lên reducer thì reducer mới có thể update dc state nên phải tạo thêm các Actions dưới dạng function và trả về một object.
  return {
    type: SET_PRODUCT,
    payload // payload ở đây sẽ là (e.target.value).
  }
}

export const addProduct = (payload) => {
  return {
    type: ADD_PRODUCT,
    payload // payload ở đây sẽ là product của state {product, products}.
  }
}

export const deleteProduct = (payload) => {
  return {
    type: DELETE_PRODUCT,
    payload // payload ở đây sẽ là index.
  }
}
