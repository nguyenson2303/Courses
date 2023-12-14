import { HeaderOnly } from '~/components/Layouts'
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

/*
* Có 2 bước thể thêm 1 Page để work ở browser: 
_ Bước 1: Vào Folder src tạo 1 Folder chứa File index.js như trang Home (copy Folder Home ra rồi đổi tên).
_ Bước 2: Vào Folder routes rồi vào file index.js (chính là file này đây) nạp thêm Profile vào như các Home và Following.
*/

// Public routes - Dùng cho những Router mà ko cần đăng nhập vẫn vào được.  
const publicRoutes = [
  {path: '/', component: Home},
  {path: '/following', component: Following},
  {path: '/profile', component: Profile},
  {path: '/upload', component: Upload, layout: HeaderOnly},
  {path: '/search', component: Search, layout: null}
]

// Private routes - Dùng cho những Router mà phải đăng nhập mới vào được, nếu chưa đăng nhập thì điều hướng sang trang Login.
const privateRoutes = [
 
]

export {publicRoutes, privateRoutes}