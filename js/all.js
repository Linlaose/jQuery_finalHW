$(document).ready(function () {
  // 下拉式選單
  $('.menu-product').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass("menu-active");
    $('.menu-hidden').toggleClass('menu-show');
  });
  // 下拉式選單 end
  // top 頁面滾動頂部
  $('.goTop').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });
  // top 頁面滾動頂部 end
  // Swiper
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    autoplay: {
      delay: 1500,
    }
  });
  // Swier end
  lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true
    })
});