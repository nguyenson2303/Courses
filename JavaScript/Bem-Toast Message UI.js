function toast({title = '', message = '', type = 'info', duration = 3000}) {
 const main = document.getElementById('toast');
 if(main) {
  const toast = document.createElement('div');

// Auto remove toast
  const autoRemoveId = setTimeout(function() {
     main.removeChild(toast);
    }, duration + 1000);

// Remove toast when click
  toast.onclick = function(e) {
   if(e.target.closest('.toast_close')) {
    main.removeChild(toast);
    clearTimeout(autoRemoveId);
   }
  }

  const icons = {
   success: 'fa-solid fa-circle-check',
   info: 'fa-solid fa-circle-info',
   warning: 'fa-solid fa-circle-exclamation',
   error: 'fa-solid fa-circle-exclamation'
  };
  const icon = icons[type];
  const delay = (duration / 1000).toFixed(2);

  toast.classList.add('toast', `toast-${type}`);
  toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
  toast.innerHTML = `
       <div class="toast_icon">
        <i class="${icon}"></i>
       </div>
       <div class="toast_body">
        <h3 class="toast_tittle">${title}</h3>
        <p class="toast_msg">${message}</p>
       </div>
       <div class="toast_close">
        <i class="fa-solid fa-xmark"></i>
       </div>`;
       main.appendChild(toast);
    
 }
}

function showSuccessToast() {
 toast({
   title: 'Thành Công...!',
   message: 'Chúc mừng bạn đã thành công...!',
   type: 'success',
   duration: 3000
});
}

function showErrorToast() {
 toast({
   title: 'Thất Bại...!',
   message: 'Đã có lỗi xảy ra...!',
   type: 'error',
   duration: 3000
});
}