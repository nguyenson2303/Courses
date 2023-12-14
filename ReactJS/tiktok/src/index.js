import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom" // Dùng as để đổi tên ngắn hơn.

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Lesson 14*** import { ThemeProvider } from "./components/Lesson14ReactContext_useContext/ThemeContext";
// import { StoreProvider } from "./components/Lesson15ContextUseReducer";
// Lesson 15*** import { ProductProvider } from './components'
/*
// Lesson7UseEffectWithFakeChatApp: Fake Comments.
function emitComments(id) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {detail: `Nội dung comments của lesson ${id}`})
        ) // dispatchEvent giống như listenEvent dùng để chủ động tự phát event theo mong muốn, phạm vi window giúp bất cứ file nào trong ứng dụng chỉ cần đang chạy là đều có lắng nghe được event này. 
    }, 2000)
}

emitComments(1)
emitComments(2)
emitComments(3)
*/



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Lesson 14***<ThemeProvider>

  // <StoreProvider>
  // </StoreProvider>
  // Lesson 15*** <ProductProvider>
  <Router>
    <App />
  </Router>
  // Lesson 15***  </ProductProvider>
  // Lesson 14***</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
