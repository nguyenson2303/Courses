// Trong Console của browser code app.get, app.add, .... sẽ thấy kết quả.
const app = (function() {   // IIFE Hàm gọi ngay thêm dấu ngoặc () bọc Function lại và ngoặc () để gọi hàm.
// Biến cars đã trở thành Private do nằm trong IIFE.
    const cars = []

    return {   
        get(index) {
            return cars[index]
        }, 
        add(car) {
            cars.push(car)
            },
        edit(index,car) {
            cars[index] = car
        },
        delete(index) {
            cars.slice(index, 1)
        },
    }
})()    // () gọi hàm.

