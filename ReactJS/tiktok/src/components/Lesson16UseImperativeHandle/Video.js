import { forwardRef, useImperativeHandle, useRef } from 'react' // đây là một HOC dùng để chuyển tiếp
import video1 from './videos/video-1.mp4'

/*
useImperativeHandle: Giúp tùy chỉnh được ref của 1 Function Components. Tức là khi truyền ref đến 1 Fucntion Component tuỳ chỉnh nào đó, những gì nhận lại là những gì Fucntion Component đó cho phép nhận thông qua việc sử dụng useImperativeHandle.

useImperativeHandle được tạo ra cho các kịch bản mà ta quyết định refs sẽ có và được quyền truy cập gì từ 1 Fucntion Component tuỳ chỉnh.

useImperativeHandle giúp chúng ta giới hạn khả năng truy cập đến tầng native của một Component hay một Element để tránh các trường hợp có mục đích xấu.

useImperativeHandle nên được dùng cùng với forwardRef.

useImperativeHandle nhận vào 2 tham số là ref và callbacks.
*/

function Video(props, ref) { //đối số thứ 2 ref là của forwardRef bọc bên ngoài Video forwardRef(Video).

    const videoRef = useRef()

    useImperativeHandle(ref, () => ({   // Đối số thứ 2 là 1 callback có thể return ra 1 objects.
        play() {
            videoRef.current.play()
        },

        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video
            ref={videoRef}
            src={video1}
            width={600}
        // controls // Props này dùng để tự động hiển thị ra controls trong video để điểu khiển video.
        />
    )
}

export default forwardRef(Video)