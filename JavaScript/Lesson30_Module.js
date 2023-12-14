import { logger2 } from './Module_logger/index.js'; 
import * as constants from './Module_constants.js'; // Import * là import toàn bộ export bên Module_constants.js và Add vào 1 Alias tên là constants.
console.log(constants);
logger2('Test Message...', constants.TYPE_WARN);

// Để có thểm import thì chính bản thân phải là module, bên html tại thẻ <script> trong thẻ <body> thêm thuộc tính type="module".
/*VD: 
import logger from './logger.js'; <=> thêm vào tính năng logger của trang logger.js.

Trang logger.js cũng phải thêm vào đoạn mã code: export default logger; <=> cho phép import fucntion logger trong trang logger.js
*/