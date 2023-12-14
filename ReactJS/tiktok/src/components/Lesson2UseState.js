import { useState } from "react"

/**
 * Để tạo 1 Projet React vào Teminal và dùng câu lệnh: npx create-react-app ProjectName
 * Sau khi tạo được Project có thể vào Terminal bên trong Project đó và dùng các câu lệnh sau:
 * 1. npm start   => Dùng để mở Project, tương tự như Live Server.
 * 2. npm run build   => Dùng để build SourceCode thành file tĩnh đã được tối ưu để có thể Deploy lên Production.
 * 3. npm test    => Dùng để chạy test.
 * 4. npm run eject   => Dùng để bung ra các cấu hình Webpack. (ko nên dùng, chỉ dùng khi muốn hiện Webpack ra để chỉnh sửa lại Webpack).
 */

/**
 * const [state, setState] = useState(initState)
 *
 * Khi chạy lần đầu tiên useState sẽ gán initState vào cho state, setState là 1 function dùng để thay đổi state khi được gọi, giá trị nhận vào của setState sẽ được gán cho state. Hàm setState khi được gọi sẽ ko thực thi ngay mà lên lịch trình. Sau khi re-render lại thì mới thay đổi (gán) giá trị cho state.
 *
 * Component sẽ được re-render sau khi setState (Component sẽ được gọi lại lần nữa).
 * InitState chỉ dùng 1 lần để gán giá trị cho state ở lần đầu tiên.
 * setState với Callback. Callback (hàm) sẽ trả về cho Callback 1 đối số là giá trị trước đó của state (hoặc có thể hiểu là giá trị hiện tại của state tại lúc đó). Giá trị return của Callback sẽ được gán cho setState để thay làm state mới.
 */

/*
* Toán tử ?? là dùng để kiểm tra vế bên trái có phải nullish (null hoặc undefine) hay ko. Nếu là nullish thì trả về giá trị vế bên phải.
* Toán tử || dùng trong JSX khi gặp True (nếu vế trái là True) sẽ ngừng và ko thực hiện vế bên phải. Do || chỉ cần 1 thằng True là sẽ chạy nên khi gặp true là dừng luôn.
* Toán tử && dùng trong JSX khi gặp False (nếu vế trái là False) sẽ ngừng và ko thực hiện vế bên phải. Do && phải toàn bộ đều True thì mới chạy nên chỉ cần 1 thằng False là sẽ dừng luôn.
*/

function Lesson2UseState() {
  const [counter, setCounter] = useState(1)

  const handleCounterIncrease = () => { // Lúc này chỉ mới là tạo hàm chứ chưa gọi hàm.
    setCounter(counter + 1)
  }

  const gifts = ["Intel Corei9", "RTX 4090", "RGB KeyBoard"]
  const [gift, setGift] = useState() // lúc này gift (initValue) ko có nên là undefined.
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]) // sau khi thực hiện đoạn mã trên random ra số rồi gán vào setGift. Sau đó sẽ render bằng cách gọi lại function Lesson2UseState1 lần nữa. Ở lần thứ 2 sẽ ko lấy initValue nữa mà thay gift bằng setGift vừa lấy được ở setGift(gifts[index]) vào.
  }

  return (
    <>
      <h3>***Lesson2_useState***</h3>
      <div className="Lesson2_UseState1"></div>
      <h1>{counter}</h1>
      {/* Lúc này hàm handleCounterIncrease mới được gọi. */}
      <button onClick={handleCounterIncrease}>Increase</button>
      <hr />
      <div className="Lesson2_UseState2"></div>
      <h1>{gift || "Chưa có phần thưởng"}</h1>{" "}
      {/*Vì gift undefined nên là false => 'Chưa có phần thưởng'. toán tử || có nghĩa là khi gặp True (gift là True) thì sẽ dừng lại ko thực hiện thằng bên phải là 'Chưa có phần thưởng'*/}
      <button onClick={randomGift}>Lấy Thưởng</button>{" "}
      {/*Khi click vào nút 'Lấy Thưởng' sẽ bắt event rồi gọi hàm randomGift */}
      <hr />
    </>
  )
}

export default Lesson2UseState
