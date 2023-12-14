import Context from "./Context"
import { useContext } from "react"

export const useLesson15GlobalText = () => {
    const [state, dispatch] = useContext(Context)

    return [state, dispatch]
}