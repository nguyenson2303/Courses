import { createContext, useState } from "react"

// 1. Create Context.
const ThemeContext = createContext() // biến ThemeContext sẽ nhận được object có Provider và Consumer. Trong mỗi ứng dụng React có thể sử dụng vô số createContext() khác nhau. Mỗi lần gọi createContext() nó sẽ tạo ra một Context cụ thể.

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const value = {
    theme,
    toggleTheme,
  }
  // 2. Provider.
  // Tất cả những children của ThemeContext đều sẽ nhận dc value.
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
