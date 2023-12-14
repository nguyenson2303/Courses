import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"

function ParaGraph() {
  const context = useContext(ThemeContext) // useContext có sẵn hàm Consumer để nhận dữ liệu từ Provider. useContext sẽ dùng hàm Consumer để nhận lại được chính value của ThemeContext.

  return (
    <p className={context.theme}>
      The original Air Jordan 1 Chicago colorway was first introduced in 1985
      and has only been retroed a few times since. But 2022 is the year that the
      colorway returns with an added vintage look. Pre-yellowed accents and
      cracked leather uppers showcase a fabricated look of age and wear. The Air
      Jordan 1 Lost and Found Chicago released in November of 2022 for $180.
    </p>
  )
}

export default ParaGraph
