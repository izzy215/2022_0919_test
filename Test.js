let itemList = document.querySelectorAll(".item");
let wrapper = document.querySelector(".wrapper01");
let btnList = document.querySelectorAll(".btns .wrapper .item button");

btnList.forEach(function (btn, idx) {
  btn.addEventListener("click", function () {
    wrapper.style.transform = `translateX(${idx * -100}vw)`;
  });
});
