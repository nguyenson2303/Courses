const { override, useBabelRc } = require("customize-cra"); // Mặc định override sẽ trả về cấu hình mặc định của Webpack bên trong đã được ẩn đi. import thêm useBabelRc để gọi hàm phía dưới dùng để hỗ trợ file babelrc

module.exports = override( // Export cấu hình mặc định của Webpack bên trong đã được ẩn đi ra ngoài, muốn override cấu hình Webpack thì đưa các cấu hình vào trong đây (Danh sách để hỗ trợ override Webpack trên Github: https://github.com/arackaf/customize-cra/blob/master/api.md) VD: muốn hỗ trợ file babelrc mà đã tạo trước đó dùng hàm   

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
);