function logger(log, type = 'log') {
  console[type](log);
}
 
logger('Cảnh báo, cảnh báo...', 'warn');

logger('Lỗi rồi, lỗi rồi...', 'error');

// Ngoài ra, default parameters thường dùng trong field nhập liệu vì có nhưng case ko bắt buộc nhập nhưng dưới database lại ko cho null.