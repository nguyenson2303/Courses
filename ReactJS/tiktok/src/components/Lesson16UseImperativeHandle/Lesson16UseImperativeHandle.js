import Video from "./Video"
import { useRef } from "react"

function Lesson16UseImperativeHandle() {

    const videoRef = useRef()

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </>
    )
}

export default Lesson16UseImperativeHandle