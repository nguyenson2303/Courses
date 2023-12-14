import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {publicRoutes} from '~/routes'
import { DefaultLayout } from './components/Layouts'
import { Fragment } from 'react'

function App() {
  /**
    _ Câu lệnh set lại UserName và Gmail trong Git:
    git config --global user.name "Admin"
    git config --global user.email "admin@vinasupport.com"	

     * Bước 1: Tạo dự án đẩy lên Github: Vào trang chủ Github, chọn New rồi tùy chỉnh theo mong muốn rồi Create Repository.
     * Bước 2: Nếu muốn tự Customize (tùy chỉnh) cấu hình của Webpack thì dùng Customize-cra. Cách cài đặt Customize-cra cho Project, vào Terminal chạy câu lệnh: npm i customize-cra react-app-rewired -D (Nếu như dùng npm, lưu ý -D thì D viết hoa, còn nếu dùng yarn thì lên Customize-cra Github copy câu lệnh dành cho yarn về chạy). Sau khi chạy xong, vào file package.json kiểm tra xem đã có Customize-cra chưa (Nếu có thì là đã xong). Tiếp theo tạo file config-overrides.js ở root directory (Sao cho file config-overrides.js này ngang cấp với folder src của Project) và Copy đoạn code sau rồi Paste vào file config-overrides.js:
     
    module.exports = function override(config, env) {
      // Những cấu hình cần ghi đè của Webpack sẽ code vào đoạn này.
    return config;
}

    Cuối cùng, vào file package.json, trong phần scripts thì những câu lệnh đang sử dụng thư viện react-script thì thay thế bằng react-app-rewired. Cách chọn nhiều câu lệnh giống nhau để thay thế cho nhanh là bôi đen 1 câu lệnh xong ấn Ctrl + D sẽ tự động chọn thêm những câu lệnh có nội dung tương tự.
     * Bước 3: Cài đặt và sử dụng thư viện babel-plugin-module-resolver, vào terminal chạy câu lệnh: npm install --save-dev babel-plugin-module-resolver (Nếu như dùng npm, lưu ý -D thì D viết hoa, còn nếu dùng yarn thì lên Customize-cra Github copy câu lệnh dành cho yarn về chạy). Tiếp theo, tạo file .babelrc ở root directory (Sao cho file .babelrc này ngang cấp với folder src của Project):
{
    "plugins": [
        [
            "module-resolver",
            {
                "root": [
                    "./src"
                ],
                "alias": {
                    "~": "./src"
                }
            }
        ]
    ]
}

    Kế tiếp cấu hình Editors autocompletion (Tự động hoàn thành đường dẫn trong IDE), tiếp tục tạo thêm file jsconfig.json ở root directory (Sao cho file jsconfig.json này ngang cấp với folder src của Project) và Copy đoạn code sau rồi Paste vào file jsconfig.json:

{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "~/*": [
                "src/*"
            ]
        }
    }
}

    * Bước 4: Cấu hình Webpack, Copy đoạn code sau rồi Paste vào file config-overrides.js: 
    
    const { override } = require("customize-cra");

module.exports = override(

);
    
    * Bước 5: Để thêm babelrc vào Webpack vào file config-overrides.js để cấu hình.

    * Bước 6: Cài đặt react-router-dom, vào Terminal chạy câu lệnh: npm i react-router-dom.

   */
  
  return (
    <Router>
    <div className='App'>
      <Routes>
      {publicRoutes.map((route, index) => {
        
        let Layout = DefaultLayout
        if (route.layout) {
            Layout = route.layout
        } else if (route.layout === null) {
            Layout = Fragment
        }

        const Page = route.component

        return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
      })}
      </Routes>
    </div>
    </Router>
  )
}

export default App;
