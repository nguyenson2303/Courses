import { useState, useEffect } from "react"

const lessons = [
  {
    id: 1,
    name: "React"
  },
  
  {
    id: 2,
    name: "JavaScript"
  },

  {
    id: 3,
    name: "Material UI"
  }
]

function Lesson7UseEffectWithFakeChatApp() {
  const [lessonId, setLessonId] = useState(1)

  useEffect(() => {
    const hadleComment = ({ detail }) => {
      console.log(detail)
    }
    
    window.addEventListener(`lesson-${lessonId}`, hadleComment)
    return () => {
      window.removeEventListener(`lesson-${lessonId}`, hadleComment)
    }
  }, [lessonId])

  return (
    <>
      <h1>***Lesson7_UseEffectWithFakeChatApp***</h1>
      <ul>
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            style={{ color: lessonId === lesson.id ? "red" : "#333" }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Lesson7UseEffectWithFakeChatApp
