console.log("js loaded");

//GÜNDEMDEN HABERLER
var swiper = new Swiper(".journal-news .wrapper .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//BAKMADAN GEÇME
var bottom = new Swiper(".category-widget .swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
})

//YUKARI KAYDIR
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;
function scrollToTop (){
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
};
scrollToTopBtn.addEventListener("click", scrollToTop);


//YORUMLAR
var reply_Btn = document.querySelectorAll('.comment-area .item .buttons .btn-reply');
var message = document.querySelectorAll('.comment-area .item .popup');

function itemMessageBox() {
  message.forEach(element => {
    element.classList.remove("show");
  });
}

reply_Btn.forEach(element => {
    element.addEventListener("click", function(){
      itemMessageBox();
      element.closest(".item").querySelector(".popup").classList.toggle("show");
    });
});
