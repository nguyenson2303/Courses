import { useState } from "react"

function Lesson4TodoList() {
  const [jobs, setJobs] = useState(() => {
    //load to local storage
    const storageJobs = JSON.parse(localStorage.getItem("jobs")) ?? [] // getItem sẽ trả về JSON, dùng JSON.parse để đưa về dạng string. Toán tử ?? sẽ kiểm tra xem vế bên trái có phải là nullish ko. Nếu là null hoặc undefined thì sẽ gán giá trị (lấy giá trị mặc định) là vế bên phải.

    return storageJobs
  })

  const [job, setJob] = useState("")

  const handleSubmit = () => {
    setJobs((pre) => {
      const newJobs = [...pre, job]

      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs)  //JSON.stringify đưa về kiểu JSON thì mới lưu được trong local Storage
      localStorage.setItem("jobs", jsonJobs)

      return newJobs
    })
    setJob("")
  }

  return (
    <>
      <h3>***Lesson4_TodoList***</h3>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
      <hr />
    </>
  )
}

export default Lesson4TodoList
