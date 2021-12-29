console.log("js loaded");

//RELATED NEWS
var bottom = new Swiper(".related-news .related-swiper", {
  slidesPerView: "auto",
  loop: true,
})

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

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
};
scrollToTopBtn.addEventListener("click", scrollToTop);


//YORUMLAR
var reply_Btn = document.querySelectorAll('.comment-area .item .buttons .btn-reply');
var message = document.querySelectorAll('.comment-area .item');

function itemMessageBox(ikeyNumber) { //Gelen ikey'i message içindeki jkey numarası ile kontrol edilir.
  message.forEach((j, jkey) => {
    if (ikeyNumber == jkey) {// Eğer keyler eşitse açar ya da kapar
      j.classList.toggle("show");
    } else {
      j.classList.remove("show"); // Eğer keyler eşit değilse class silinir ve message kapanır
    }
  });
}

reply_Btn.forEach((i, ikey) => {// i: selektör, ikey: index numarası
  i.addEventListener("click", function () { //i selektörüne click olduğunda ikey numarasını fonksiyona gönderir.
    itemMessageBox(ikey);
  });
});