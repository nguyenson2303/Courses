// JSON là 1 định dạng dữ liệu (hình thái dữ liệu) được thể hiện ở dạng chuỗi (string). 
// JSON: Number, String, Boolean, Null, Array, Object.
// Stringify: Mã hóa từ JavaScript type -> JSON.
// Parse: Giải mã từ JSON -> JavaScript type.

// JSON của Array: '["JavaScript", "Pyton", "C#"]' <=> ['JavaScript', 'Pyton', 'C#']. 
console.log('-------------------------------------------- Array -------------------------------------------------');
let JSONArray = '["JavaScript", "Pyton", "C#"]'; // Lưu ý: trong JSON sử dụng nháy kép thay vì nháy đơn.
console.log(Array.isArray(JSON.parse(JSONArray)));

// JSON của Object: '{"name":"Son","age":31}' <=> {name: 'Son', age: 31}.
console.log('-------------------------------------------- Object ------------------------------------------------');
let JSONobject = '{"name": "Son", "age": 31}';
console.log(typeof JSON.parse(JSONobject));

// Kiểu String trong JSON.
console.log('-------------------------------------------- String ------------------------------------------------');
let JSONString = '"Nguyen Ngoc Son"';
console.log(JSON.parse(JSONString));

// Stringify sang JSON.
console.log('------------------------------------------- Stringify ----------------------------------------------');
let object = {name: 'Son', age: 31, test: function(){}}; // JSON ko thể biểu hiện dc Function => log ra sẽ ko thấy có function.
console.log(JSON.stringify(object));

// Parse sang javaScript type.
console.log('----------------------------------------------- Parse -------------------------------------------------');
let object2 = '{"name": "Son", "age": 31, "test": "function(){}"}';
console.log(JSON.parse(object2));