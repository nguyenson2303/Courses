import { useEffect, useState } from "react"

function Lesson6UseEffectWithTimer() {
  const [countdown, setCountdown] = useState(100)

  useEffect(() => {
    setInterval(() => {
      setCountdown((prevState) => prevState - 1) // nếu setCountdown(countdown - 1) thì sẽ mãi là 99 vì callback của useEffect(callback, []) chỉ chạy duy nhất 1 lần sau khi mount component. tại thời điểm đó countdown sẽ tham chiếu đến giá trị ban đầu là 100. Vì countdown nằm trong phạm vi scope (Closures) chỉ chạy 1 lần nên lúc nào cũng sẽ là 100. countdown - 1 => lúc nào cũng sẽ là 100 - 1 = 99. Nên khi setCountdown(preState => preState - 1) truyền vào setCountdown 1 callback thì sẽ ko còn tham chiếu đến biến nào ngoài phạm vi nữa nên sẽ giải quyết dc vấn đề.
    }, 1000)
  }, []) // setInterval cơ bản là đã lặp liên tục chỉ khi tắt ứng dụng hoặc clearInterval thì mới dừng lại nên trường hợp 2 truyền vào một mãng rỗng sẽ chỉ gọi 1 lần duy nhất nên sẽ ko gọi ra nhiều setInterval.

  /* 
  Nếu ko dùng setInterval mà dùng setTimeout thì:

    useEffect(() => {
    setTimeout(() => {
        setCountdown(countdown - 1) 
    }, 1000)
}, [countdown]) // Mỗi lần countdown thay đổi nó sẽ gọi lại callback của useEffect và lại gọi setTimeout.
*/

  return (
    <>
      <h3>***Lesson6_useEffectWithTimer***</h3>
      <p>{countdown}</p>
    </>
  )
}

export default Lesson6UseEffectWithTimer
