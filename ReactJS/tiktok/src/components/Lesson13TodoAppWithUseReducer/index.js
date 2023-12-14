import { useReducer, useRef } from "react"
import reducer, { initState } from "./reducers"

import { setProduct, addProduct, deleteProduct } from "./actions" // Khi nhìn thấy Import Destructuring (dùng {}) thì phải hiểu là đang import những cái ko phải là export default mà chỉ là export thôi. Nếu thấy dài dòng có thể kết hợp với Alias (import * as Actions from ./actions.js) => Sẽ lấy tất cả các export nhỏ và as sang 1 Alias tên là Actions (Đây là 1 Object dạng Module).

import logger from "./logger"  // Khi nhìn thấy Import thẳng ra chữ như thế này (ko dùng Destructuring {}) thì phải hiểu là đang import cái mà Module nó export default. 

function App() {
  const [state, dispatch] = useReducer(logger(reducer), initState)

  const { product, products } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addProduct(product))
    dispatch(setProduct(""))

    inputRef.current.focus()
  }

  // Bước 4: Dispatch.
  return (
    <>
      <h1>Todo</h1>
      <input
        ref={inputRef}
        placeholder="Enter toto..."
        value={product}
        onChange={(e) => {
          dispatch(setProduct(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {products.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteProduct(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
