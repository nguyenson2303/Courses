import Lesson10UseCallbackCombo from "./Lesson10UseCallbackCombo"
import { useState, useCallback } from "react"

/*
useCallback: dùng kèm với React.Memo, mỗi khi tạo ra một hàm mới hàm sẽ được lưu vào bộ nhớ rồi trả ra tham chiếu gọi là Memoized Callback (ô nhớ của Callback, là 1 tham chiếu) nên useCallback chỉ tạo ra Callback mới khi dependencies thay đổi. Nếu dependencies ko thay đổi (hoặc đối số thứ 2 của useCallback, mảng dependencies để trống) thì Callback sẽ luôn trả về tham chiếu trước đó => Giúp tránh tạo ra các hàm mới (phạm vi mới của hàm) ko cần thiết.
*/
function Lesson10UseCallback() {
  const [count, setCount] = useState(0)

  /* Khi Component cha (Lesson10UseCallback) lần đầu chạy hàm handleIncrease sẽ được lưu vào bộ nhớ và trả tham chiếu về handleIncrease và tiếp tục truyền handleIncrease vào onIncrease. Sau đó, sau khi ấn vào nút Increase trong Component con (Lesson10UseCallbackCombo) nó sẽ thực hiện setCount. Vì setCount nên count sẽ thay đổi và re-render nên sẽ gọi lại Component cha và tạo ra 1 phạm vi (scope) mới độc lập ko liên quan gì đến phạm vi trước đó nữa, Component cha sẽ thực thi lại code bên trong vì vậy khi gọi hàm handleIncrease sẽ lưu vào bộ nhớ mới và trả 1 tham chiếu mới về handleIncrease và lại tiếp tục truyền handleIncrease vào onIncrease. Khi này, Memo bên Component con sẽ kiểm tra bằng toán tử === nên sẽ thấy tham chiếu khác nhau nên trả về false => có nghĩa là props thay đổi nên sẽ re-render lại.
   *** Lưu ý: Khi so sánh kiểu dữ liệu tham chiếu thì toán tử === ko so sánh giá trị mà thực chất là so sánh tham chiếu.
   */

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])
  /* Khắc phục case Re-render này sử dụng useCallback, [] có nghĩa là ko truyền vào deps nào để so sánh có deps đó có thay đổi ko (Giống trong useEffect) nên case này sẽ ko bị re-render lại. khi [] trống ko có deps thì hàm sẽ trả lại tham chiếu trước đó thay vì tạo ra 1 tham chiếu mới. Nếu truyền deps vào [] thì khi deps thay đổi thì sẽ tạo tham chiếu mới, deps ko thay đổi thì trả lại tham chiếu cũ.
   *** Lưu ý: Nếu sử dụng React.memo ở component con để tránh bị re-render ko cần thiết thì toàn bộ function đều sử dụng useCallback. Nếu ko dùng React.memo thì ko cần dùng useCallback làm gì. Có thể sử dụng để truyền fuction vào component con và ngăn chặn tạo ra 1 scope (phạm vi) mới như ví dụ này.
   */
  return (
    <>
      <Lesson10UseCallbackCombo onIncrease={handleIncrease} />
      <h3>{count}</h3>
    </>
  )
}

export default Lesson10UseCallback
