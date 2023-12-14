// Câu lệnh cài đặt React Router V6: npm install react-router-dom@6.

// HomePage, NewsPage, ContactPage như Alias. ko cần thiết phải đặt chình xác là Home, News, Contact.
import HomePage from "./Home"
import NewsPage from "./News"
import ContactPage from "./Contact"

import { Routes, Route, Link } from "react-router-dom" // Dùng <Link to></Link> thay cho tất cả thẻ <a href></a> để tránh reload trang như MPA vì lý do làm React là SPA.
function App() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>

                    </li>

                    <li>
                        <Link to="/News">News</Link>

                    </li>

                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            {/* path sẽ kiểm tra path trên URL rồi sau đó cầm cái path đó để đối chiếu cái các path mà nó dc nhận ở dưới đây để xem nó khớp với cái nào thì sẽ render cái đó. */}
            <Routes>
                <Route path="/" element={<HomePage />} /> {/* Nếu truyền thẳng HomePage vào sẽ ko chạy do prop element cần nhận 1 React Element chứ ko phải cần 1 React Component nên phải truyền vào là <HomePage /> */}
                <Route path="/News" element={<NewsPage />} />
                <Route path="/Contact" element={<ContactPage />} />
            </Routes>
        </>
    )
}

export default App