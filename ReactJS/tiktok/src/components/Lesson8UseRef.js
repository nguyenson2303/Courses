import { useRef, useState, useEffect } from "react"

/* useRef: Dùng để lưu các giá trị qua một tham chiếu bên ngoài function component. useRef như 1 hộp chứa dùng để lưu giá trị của 1 biến để khi component re-render sẽ ko bị mất, sau khi re-render sẽ tham chiếu vào hộp chứa này để lấy giá trị.
 *** Cú pháp: useRef(InitialValue). InitialValue chỉ sử dụng lần đầu tiên khi component mounted, còn khi component re-render sẽ ko dùng lại InitialValue. UseRef sẽ luôn return về 1 object có property là Current. Nếu muốn lấy hoặc gán giá trị của useRef phải thông qua Current.
 */

function Lesson8UseRef() {
  const [count, setCount] = useState(60)

  const timerId = useRef()
  const prevCount = useRef()
  const h1Ref = useRef()

  useEffect(() => {
    prevCount.current = count
  }, [count])

  useEffect(() => {
    console.log(h1Ref.current)
  })

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1) // Khi setCount Component sẽ được re-render lại và vì vậy mà Component Lesson8UseRef sẽ được gọi lại lần nữa. Khi này khi dc gọi sẽ tạo ra 1 phạm vi mới => nên nhưng biến đã khai báo ở phạm vi cũ sang phạm vi mới sẽ ko còn mà sẽ được khai báo lại.
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }

  console.log(count, prevCount)

  return (
    <>
      <h3>Lesson8_UseRef</h3>
      <div className="Lesson8UseRef">
        <h1 ref={h1Ref}>{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </>
  )
}

export default Lesson8UseRef
