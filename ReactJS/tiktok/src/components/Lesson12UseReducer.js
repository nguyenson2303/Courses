import { useReducer } from "react"

/*
Cung cấp thêm 1 lựa chọn đề dùng cho State trong Component, những gì useState làm được thì useRedecer cũng làm được và ngược lại. useState thường chỉ được dùng trong trường hợp State đơn giản (kiểu dữ liệu nguyên thủy hoặc phức tạp như arrays và objects đơn giản (objects chỉ có 1 cấp ko lồng nhiều cấp) hoặc khi số lượng State ít). Có 4 bước để làm bài toán sử dụng useReducer.
1. Xác định giá trị ban đầu của State (initState).
2. Actions (Những hành động cần làm).
3. Reducer. Reducer(State, Action) nhận vào 2 tham số là State và Action.  
4. Dispatch (Kích hoạt action).

useReducer nhận vào 3 đối số nhưng thường chỉ dùng 2 đối số là: reducer, innitState. 
*/
// Bước 1: InitState.
const initState = 0

// Bước 2: Actions. Nguyên tắc đặt tên 1 hằng (const) là viết hoa tất cả và các từ cách nhau bởi dấu gạch dưới.
const UP_ACTION = "up"
const DOWN_ACTION = "down"

// Bước 3: Reducer.
const reducer = (state, action) => {
  switch (action) {
    case UP_ACTION: // thực chất case sẽ kiểm tra values chứ ko phải kiểm tra biến, nhưng check qua biến chứ ko check qua value.
      return state + 1 // Luôn phải return về cùng kiểu dữ liệu của InitState.
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error("Invalid Action")
  }
}

function Lesson12UseReducer() {
  /*
    Khi component lần đầu chạy thì useReducer sẽ được gọi và nhận reducer rồi tạm để đấy chứ ko gọi reducer ngay. Sau đó, nhận giá trị khởi tạo (initState) và return về 1 array [state, dispatch] initState sẽ được gán vào state.
    */
  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <>
      <h1>{count}</h1>
      {/* Khi gọi hàm dispatch thì phải truyền vào 1 action. UseReducer sẽ xử lý để lấy action sau đó đi gọi hàm reducer. Khi đó reducer sẽ lấy state và action hiện tại để trả vào đối số state và action của hàm reducer ở bước 3. Sau đó, hàm reducer sẽ duyệt với các case trong hàm reducer và thực hiện code phù hợp trong case đó và state mới sẽ được update rồi re-render lại component.*/}
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>

      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
    </>
  )
}

export default Lesson12UseReducer
