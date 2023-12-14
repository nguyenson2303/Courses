import { useLayoutEffect, useEffect, useState } from "react"

/*
  Sự khác nhau giữa useEffect và useLayoutEffect

  ***useEffect***
  1. Cập nhật lại State.
  2. Cập nhật DOM (mutated). (mutated đại loại là cập nhật lại property trong DOM Nodes)
  3. Render lại UI.
  4. Gọi CleanUp nếu deps thay đổi.
  5. Gọi useEffect Callback.

  ***useLayoutEffect***
  1. Cập nhật lại State.
  2. Cập nhật DOM (mutated).
  3. Gọi CleanUp nếu deps thay đổi (sync).
  4. Gọi useEffect Callback (sync).
  5. Render lại UI.
  
*/

function Lesson5UseLayoutEffect() {
    const [count, setCount] = useState(0)
    /* Sử dụng useEffect ở trường hợp này sẽ thấy count khi chuyển từ 3 về 0 sẽ bị nhấp nháy.
        useEffect(() => {
            if (count > 3)
                setCount(0)
        }, [count])
    */

    useLayoutEffect(() => {
        if (count > 3)
            setCount(0)
    }, [count])


    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click Me</button>
        </>
    )
}

export default Lesson5UseLayoutEffect
