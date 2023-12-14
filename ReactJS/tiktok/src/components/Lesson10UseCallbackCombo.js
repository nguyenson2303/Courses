import { memo } from "react"

function Lesson10UseCallbackCombo({ onIncrease }) {
  console.log("Re-render")
  return (
    <>
      <h2>Wassup Guy !!!</h2>
      <button onClick={onIncrease}>Increase</button>
    </>
  )
}

export default memo(Lesson10UseCallbackCombo)
