import { useState } from "react"
import Lesson9ReactMemoCombo from "./Lesson9ReactMemoCombo"

/**
 * Memo: Higher Order Components (HOC). Memo giúp ghi nhớ lại các props của 1 component để quyết định là có re-render component đó ko nhằm tránh re-render ở những tình huống ko cần thiết. Nguyên lý hoạt động là memo nhận vào 1 component và sau đó memo sẽ check các props của component đó xem sau mỗi lần re-render nó có bị thay đổi hay ko. Chỉ cần ít nhất 1 prop bị thay đổi giá trị thì memo sẽ quyết định cho component đó re-render, còn nếu như ko có prop nào thay đổi thì sẽ ko re-render. Khi Component cha render thì Component con của nó cũng sẽ bị render theo => lúc này hãy dùng Memo cho Component con.
 */

function Lesson9ReactMemo() {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }

  const [count2, setCount2] = useState(0)
  const increase2 = () => {
    setCount2(count2 + 1)
  }

  return (
    <>
      <Lesson9ReactMemoCombo count={count} />
      <h3>Lesson9_ReactMemo</h3>
      <h1>With Memo: {count}</h1>
      <button onClick={increase}>Click Me-With Memo</button>

      <h1>Without Memo: {count2}</h1>
      <button onClick={increase2}>Click Me-Without Memo</button>
    </>
  )
}

export default Lesson9ReactMemo
