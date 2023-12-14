import { useState, useMemo, useRef } from "react"

/*
UseMemo khác với memo là memo dùng để bọc React Component để tránh component đó re-render ko cần thiết. Còn useMemo thì được dùng trong phần thân của Function Component để tránh re-render (thực hiện lại) 1 logic nào đó ko cần thiết.
*/

function Lesson11UseMemo() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price // value từ input sẽ luôn là string nên có thể dùng Number(price) hoặc parseInt(price) để chuyển sang kiểu số (number) hoặc là dùng cách như trên là +price.
      },
    ])
    setName("")
    setPrice("")

    nameRef.current.focus() // focus() là method của DOM Element chứ ko phải của React.
  }

  // Nếu ko dùng useMemo kiểu gì khi Component Re-render cũng sẽ chạy lại các dòng code logic tính total nên sẽ ko đảm bảo Performance => đưa vào useMemo để tránh logic này chạy lại (Re-render lại).
  const total = useMemo(() => {
    products.reduce((result, product) => {
      console.log("Tính toán lại...")
      return result + product.price
    }, 0)
  }, [products]) // nếu products thay đổi nó re-render tính toán lại còn nếu ko thay đổi nó sẽ giữ nguyên tham chiếu cũ ko re-render và trả về kết quả trước đó.

  return (
    <>
      {/*Khi dc mount vào DOM thì ref sẽ được set lại current nên nameRef.current chính là cái DOM Element thật của input này*/}
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter Name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter Price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name}-{product.price}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Lesson11UseMemo
