function Validator (formSelector) {
  let _this = this;
  let formRules = {};

// Tìm thẻ cha của element đang lắng nghe sự kiện
 function getParent(element, selector) {
   while(element.parentElement) {
     if(element.parentElement.matches(selector)){
       return element.parentElement;
     }
     element = element.parentElement;
   }
 }


 let validatorRules = {
  /**
   * Quy ước tạo rule:
   * - Nếu có lỗi thì return 'errorMessage'.
   * - Nếu ko có lỗi thì return 'undefine'.
   */
   required: function (value) {
     return value ? undefined : 'Vui lòng nhập trường này.';
   },
   email: function (value) {
     let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     return regex.test(value) ? undefined : 'Trường này phải là email.';
   },
   min: function (min) {
     return function (value) { 
       return value.length >= min ? undefined : `Vui lòng nhập ít nhất ${min} ký tự`;
     }
   },
    max: function (max) {
     return function (value) { 
       return value.length <= min ? undefined : `Vui lòng nhập tối đa ${max} ký tự`;
     }
   },
 };

 // Lấy ra formElement trong DOM qua 'formSelector'
  let formElement = document.querySelector(formSelector);
 // Chỉ xử lý khi có element trong DOM
   if (formElement) {
 // Lấy ra toàn bộ element trong 'formElement' mà có Attribute là [name] và [rules].
   let inputs = formElement.querySelectorAll('[name][rules]');
   for (let input of inputs) {
 // rules là 1 Attribute tự định nghĩa (Attribute ko hợp lệ của element) nên ko giống với Attribute 'name' của element. Vì vậy phải dùng getAttribute để có thể lấy ra Attribute 'rules' của element.
 // Cắt theo ký tự '|' trả về mãng chuỗi các rule riêng lẻ.
    let rules = input.getAttribute('rules').split('|'); 
    for (let rule of rules) {
     let ruleInfo;
     let isRuleHasValue = rule.includes(':');

      if (isRuleHasValue) {
 // Cắt theo ký tự ':' trả về mãng chuỗi các rule riêng lẻ.
        ruleInfo = rule.split(':');
 // Gán rule = ruleInfo phần tử thứ [0] thì sẽ là chữ 'min'. ruleInfo[1] sẽ là số '6' trong min:6.
        rule = ruleInfo[0];
      }

     let ruleFunction = validatorRules[rule];

      if (isRuleHasValue) {
        ruleFunction = ruleFunction(ruleInfo[1]);
      }

      if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(ruleFunction);
      } else {
          formRules[input.name] = [ruleFunction];
       }
    }    

 // Lắng nghe sự kiện để validate (blur, change, ...)
    input.onblur = handleValidate;
    input.oninput = handleClearError;
   }
// Hàm thực hiện validate
   function handleValidate(event) {
     let rules = formRules[event.target.name];
     let errorMessage;

     for(let rule of rules){
        errorMessage = rule(event.target.value);
        if(errorMessage) break;
     }

// Nếu có lỗi thì hiển thị message lỗi ra UI.
     if(errorMessage) {
// even.target trả về element đang lắng nghe. 'form-group' là class của thẻ cha mà ta muốn tìm và là tham số thứ 2 của hàm getParent() ở trên.
       let formGroup = getParent(event.target, '.form-group');
// Kiểm tra nếu có formGroup (nếu có thẻ cha có class là 'form-group') thì sẽ thực thi code ở dưới.   
       if(formGroup) {
         formGroup.classList.add('invalid');
// Từ formGroup truy ra thẻ 'form-message'.       
         let formMessage = formGroup.querySelector('.form-message');
// Kiểm tra nếu có formMessage (lúc này là thẻ có class là 'form-message' của element đang lắng nghe).
       if(formMessage) {
         formMessage.innerText = errorMessage;
       }
      }
     }
    return !errorMessage;
   }
// Hàm clear message lỗi.   
   function handleClearError(event) {
     let formGroup = getParent(event.target, '.form-group');
     if(formGroup.classList.contains('invalid')) {
       formGroup.classList.remove('invalid');

       let formMessage = formGroup.querySelector('.form-message');
       if(formMessage) {
         formMessage.innerText = '';
       }
      }
    }
   }
// Xử lý sự kiện submit của Form.
formElement.onsubmit = function(event) {
  event.preventDefault();

  let inputs = formElement.querySelectorAll('[name][rules]');
  let isValid = true;
  for (let input of inputs) {
    if(!handleValidate({ target: input })) {
     isValid = false;
    }
  }
// Khi ko có lỗi thì Submit Form.
  if(isValid) {
    if(typeof _this.onSubmit === 'function') {

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
// Gọi lại hàm onSubmit và trả về kèm Value các thẻ Input của Form.
      _this.onSubmit(formValues);
    } else {
     formElement.submit();
    }
  }
 }
}