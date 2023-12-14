import Content from "./Content"
import "./index.css"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

/*
 useContext giúp đơn giản hóa việc truyền dữ liệu component cha xuống component con mà ko cần dùng props. Kiểu như dữ liệu tập trung 1 chỗ. Components con nào muốn dùng thì lấy về
 Các bước của 1 useContext:
 1. Create Context.
 2. Provider (Cung cấp, truyền dữ liệu).
 3. Consumer(Sử dụng, nhận dữ liệu).
*/

/*
Props của React Component có thể xem như là đối số của Component. Do có thể xem React Component cũng là function. 
*/

function App() {
  const context = useContext(ThemeContext)
  // Dùng ThemeProvider để bọc lại thì toàn bộ những thằng bên trong ThemeProvider đều là con của nó.
  return (
    <>
      <button onClick={context.toggleTheme}>Toggle Theme</button>
      <Content />
    </>
  )
}

export default App
