import { useEffect, useState } from "react"

/*
* userEffect được dùng khi muốn sử dụng các Side Effect (là các hiệu ứng phụ tác động và làm biến đổi trạng thái state bên ngoài chương trình hoặc có thể hiểu là một chương trình phần mềm khi có 1 tác động xảy ra nó dẫn đến việc dữ liệu của chương trình bị thay đổi).

*** Một số tình huống sử dụng useEffect:
1. Update DOM.
2. Call API.
3. Listen DOM events.
4. CleanUp.

*** Cứu pháp:
* useEffect(callback, [dependency]), tham số đầu tiên callback là tham số bắt buộc. Có 3 trường hợp với useEffect là:
* 1. useEffect(callback)
* 2. useEffect(callback, [])
* 3. useEffect(callback, [dependency])

*** Lưu ý:
* Lý thuyết chung cho cả 3 trường hợp là Callback luôn được gọi sau khi Component Mounted.
* Cleanup function luôn được gọi trước khi component unmounted để tránh vấn đề memory leak (rò rỉ bộ nhớ).
* useEffect() sinh ra mục đích để quản lý vòng đời của của một component và nó phục vụ chúng ta sử dụng trong function component thay vì các lifecycle như trước đây trong class component (về cơ bản là giống nhau). useEffect() lắng nghe các thay đổi của biến và state trong array phụ thuộc, khi giá trị của chúng thay đổi thì phần thân trong useEffect() sẽ được thực thi.
*/

const tabs = ["posts", "comments", "albums"]

function Lesson5UseEffect() {

  /*
  1. useEffect(callback) với 1 đối số là Callback (Trong thực tế ít dùng hơn trường hợp 2 và 3).
  *** Lưu ý của trường hợp 1: Callback được gọi khi Component re-render. Callback sẽ được gọi sau khi Component thêm Element vào DOM => Tuy Callback được truyền vào useEffect sẽ dc gọi trước nhưng sẽ ko chạy ngay mà để đó và chạy tiếp code bên dưới để xử lý thêm Element vào DOM rồi mới quay lại gọi callback được truyền vào useEffect và callack này được gọi sau khi Component re-render.
  */

  // VD: Bài toán Update DOM.
  const [title, setTitle] = useState("")

  useEffect(() => {
    document.title = title // document.title = title để ngoài useEffect vẫn ra kết ra tương tự, nhưng useEffect được sinh ra để làm những cái thay đổi Side Effect như document.title = title và nếu để ở ngoài thì document.title = title sẽ được thực thị trước khi render ra giao diện người dùng. Vì vậy nếu những logic phức tạp hơn có khả năng sẽ làm delay việc render ra giao diện cho người dùng.
  })

  /*
  2. userEffect(callback, []) với 2 đối số là Callback và một mảng rỗng.
  *** Lưu ý của trường hợp 2: Chỉ gọi Callback 1 lần sau khi component mounted.
  */

  // VD: Bài toán Call API.
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts)
      })
  }, [])

  /*
  3. useEffect(callback, [dependency]) với 2 đối số là Callback và mộng mảng có chứa dependency.
  *** Lưu ý của trường hợp 3: Callback sẽ được gọi lại mỗi khi dependency thay đổi.
  */

  // VD: Bài toán Call API.
  const [type, setType] = useState("posts")
  const [contents, setContents] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((re) => re.json())
      .then((contents) => {
        setContents(contents)
      })
  }, [type])

  // 4. Listen DOM Events.
  const [showGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true)
      } else {
        setShowGoToTop(false)
      }
    }

    // VD: Bài toán Listen DOM events.
    window.addEventListener("scroll", handleScroll) // sự kiện này từ window, sẽ chỉ mất khi tắt browser nên sẽ gây ra rò rỉ bộ nhớ khi re-render.

    /*
    * VD: Bài toán CleanUp.
    *** Lưu Ý:
    * CleanUp Function luôn được gọi trước khi Unmount Component.
    * CleanUp Function luôn được gọi trước khi Callback được gọi (Ngoại trừ lần Mounted).
    */
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Phần dưới đây chính là phần để thêm Element vào DOM, có nghĩa là khi Callback của useEffect được gọi nó sẽ ko chạy code bên trong liền mà để đó và chạy phần code dưới đây để thêm Element vào DOM xong sau đó nó mới quay lại chạy phần code trong Callback của useEffect.
  return (
    <>
      <h3>***Lesson5_useEffect***</h3>

      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <div className="Lesson5UseEffect2">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>

      <div className="Lesson5UseEffect3">
        {tabs.map((tab) => (
          <button
            key={tab}
            style={
              type === tab
                ? {
                  color: "#fff",
                  backgroundColor: "#333"
                }
                : {}
            }
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        ))}

        <ul>
          {/* Do comments ko có property title nên sẽ ko hiển thị dc giống posts và albums nên sẽ lấy name */}
          {contents.map((content) => (
            <li key={content.id}>{content.title || content.name}</li>
          ))}
        </ul>
      </div>
      {/* toán tử && có nghĩa là khi gặp False (showGoToTop là False) thì sẽ dừng lại ko thực hiện thằng bên phải là thẻ <button> */}
      {showGoToTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go To Top
        </button>
      )}
    </>
  )
}

export default Lesson5UseEffect
