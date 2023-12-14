// Contructor Function (Đối tượng Validator).
function Validator (options) {

  function getParent(element, selector) {
    while(element.parentElement) {
      if(element.parentElement.matches(selector)){
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  let selectorRules = {};

// Hàm thực hiện Validate.
function validate(inputElement, rule){   
    let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
    let errorMessage;

// Lấy ra các rules của Selector
    let rules = selectorRules[rule.selector];

// Lặp qua từng rule và kiểm tra. Nếu có lỗi thì dừng 
    for(var i = 0; i < rules.length; i++){
      switch(inputElement.type) {
        case 'radio':
        case 'checkbox':
          errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'));
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }     
      if(errorMessage) break;
    }

      if(errorMessage){
       errorElement.innerText = errorMessage;
       getParent(inputElement, options.formGroupSelector).classList.add('invalid');
      }else{
       errorElement.innerText = '';
       getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
      }

      return !errorMessage;
}
// Lấy Element của Form cần Validate.
let formElement = document.querySelector(options.form);
if (formElement) {
// Khi Sumit Form
  formElement.onsubmit = function (e) {

    e.preventDefault(); // Bỏ qua sự kiện onSubmit
    let isFormValid = true;

// Lặp qua từng Rule và Valitade.
    options.rules.forEach(function (rule){
      let inputElement = formElement.querySelector(rule.selector);
      let isValid = validate(inputElement, rule);
      if (!isValid) {
        isFormValid = false;
      }
    });  

    if(isFormValid){
      // Trường hợp Submit với JavaScript
      if(typeof options.onSubmit === 'function'){   

        let enableInputs = formElement.querySelectorAll('[name]');

        let formValues = Array.from(enableInputs).reduce(function (values, input){
        
          switch(input.type){
            case 'radio':
              values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
              break;
            case 'checkbox':   
                if (!input.matches(':checked')) {
                  // values[input.name] = '';
                  return values;
                }
                
                if (!Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }
                  values[input.name].push(input.value);              
              break;
            case 'file':
              values[input.name] = input.files;
              break;
            default:
              values[input.name] = input.value;

          }

        return values;
        }, {});

        options.onSubmit(formValues);
      }
      // Trường hợp Submit với hành vi mặc định của HTML.
      else{
        formElement.submit();
      }
    }
  }
// Lặp qua mỗi rule và xữ lý (lắng nghe sự kiện blur, input, ...).
  options.rules.forEach(function (rule){

    // Lưu lại các rules cho mỗi input
    if(Array.isArray(selectorRules[rule.selector])){
      selectorRules[rule.selector].push(rule.test);
    }else{
      selectorRules[rule.selector] = [rule.test];
    }
    

   let inputElements = formElement.querySelectorAll(rule.selector); // Selector từ formElement chứ ko phải Document. Nếu tìm từ Document thì trường hợp document có nhiều form thì có thể sẽ bị nhầm và sai.
   Array.from(inputElements).forEach(function (inputElement){
    // Xử lý trường hợp blur khỏi input.
    inputElement.onblur = function () { // onblur: bỏ chuột ra ngoài, ko còn forcus vào Element nữa.
      validate(inputElement, rule);
      }

    // Xử lý trường hợp khi nhập vào input
    inputElement.oninput = function () {
      let errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
      errorElement.innerText = '';
      getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
    }
});
 
  });
}
}
// Định nghĩa Rules.
Validator.isRequired = function(selector, message){
return {
 selector: selector,
 test: function(value){
  return value ? undefined : message || 'Vui lòng nhập thông tin'
 }
};
}

Validator.isEmail = function(selector, message){
 return {
 selector: selector,
 test: function(value){
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(value) ? undefined : message || 'Vui lòng nhập thông tin'
 }
};
}

Validator.minLength = function(selector, min, message){
 return {
 selector: selector,
 test: function(value){
  return value.length >= min ? undefined : message || 'Vui lòng nhập thông tin'
 }
};
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
 return {
 selector: selector,
 test: function(value){
  return value === getConfirmValue() ? undefined : message || 'Vui lòng nhập thông tin'
 }
};
}
