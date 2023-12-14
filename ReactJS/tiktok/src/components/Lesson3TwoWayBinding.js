import { useState } from "react"

const courses = [
  {
    id: 1,
    name: "Html"
  },

  {
    id: 2,
    name: "JavaScript"
  },

  {
    id: 3,
    name: "ReactJS"
  }
]

function Lesson3TwoWayBinding() {
  const [checked, setChecked] = useState(2) // truyền 2 vào để mặc định là check ở input radio có id = 2.

  const [checked2, setChecked2] = useState([]) // truyền mảng vào làm initValue vì checkbox là kiểu chọn nhiều (list) nên dùng mảng.

  const handleSubmit = () => {
    console.log({ id: checked })
  }

  const handleCheck = (id) => {
    setChecked2((prev) => {
      const isChecked = checked2.includes(id) // checked khi id có trong mảng checked2
      if (isChecked) {
        return checked2.filter((item) => item !== id) // nếu đã check rồi thì khi được gọi lần nữa, nó vẫn sẽ gọi id của item đó và trả về danh sách ko bao gồm item có id đó.
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit2 = () => {
    console.log({ ids: checked2 })
  }
  return (
    <>
      <h3>***Lesson3_Two-Way Binding***</h3>
      {courses.map((course) => (
        <div key={course.id} className="Lesson3TwoWayBinding1">
          {" "}
          {/*key phải đặt ở thẻ lớn nhất bọc input radio */}
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />{" "}
          {/*sẽ được checked khi checked = với id của input radio*/}
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>

      <hr />
      <div className="Lesson3TwoWayBinding2">
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked2.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />{" "}
            {/* checked khi course.id có trong mảng checked2 */}
            {course.name}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit2}>Submit</button>
      <hr />
    </>
  )
}

export default Lesson3TwoWayBinding
