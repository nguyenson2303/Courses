import { SET_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from "./constants"

// Bước 1: initState
export const initState = {
  product: "", // Dùng làm state trong ô input.
  products: [], // Dùng làm state trong danh sách Product add vào và được hiển thị dưới Todo.
}

// Bước 3: reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state, // trả lại state cũ.
        product: action.payload, // gán value của element dc target vào key product.
      }

    case ADD_PRODUCT:
      return {
        ...state, // trả lại state cũ.
        products: [...state.products, action.payload], // rãi state.products cũ và gán thêm product mới vào mãng có key là products.
      }

    case DELETE_PRODUCT:
      const newProducts = [...state.products] // rãi state.products vào mãng mới là newProducts
      newProducts.splice(action.payload, 1) // xóa phần tử trong mảng newProducts từ index (index lấy được từ action.payload) và xóa 1 phần tử.
      return {
        ...state, // trả lại state cũ.
        products: newProducts, // gán mảng mới vào key products.
      }

    default:
      throw new Error("Invalid Action...")
  }
}

export default reducer
