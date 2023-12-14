const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// Active size wrong size on first load.
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px"; // offserLeft: Cho biết khoảng cách của phần tử được chọn với phần tử cha của nó tính về phía trái, thông tin là số điểm ảnh pixel.
  line.style.width = tabActive.offsetWidth + "px"; // offsetWidth: Cho biết thông tin số lượng điểm ảnh tính theo chiều rộng của phần tử mà được chọn. Chú ý rằng đây là độ rộng thực của box. Thuộc tính offsetWidth trong DOM sẽ cho biết chiều rộng thực sự của hộp và nó sẽ không cộng thêm các yếu tố định kiểu bằng CSS như padding, margin hay border.
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
