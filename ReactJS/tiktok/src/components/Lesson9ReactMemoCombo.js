import { memo } from "react"

function Lesson9ReactMemoCombo({ count }) {
  console.log("re-render")

  return <h2>Hello Wassup !!! {count}</h2>
}

export default memo(Lesson9ReactMemoCombo)
