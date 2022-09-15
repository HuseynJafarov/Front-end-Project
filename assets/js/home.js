$(function() {
  let swiper = new Swiper(".mySwiper", {
    loop: true,
  });
  
  $('input').focus(function(){
    $(this).parents('.form-group').addClass('focused');
  });
  
  $('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).removeClass('filled');
      $(this).parents('.form-group').removeClass('focused');  
    } else {
      $(this).addClass('filled');
    }
  })

  let scrollSection = document.getElementById("scroll-section");
   
   window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
     if (document.body.scrollTop > 195|| document.documentElement.scrollTop > 195) {
        scrollSection.style.top = "0";
     } else {
        scrollSection.style.top = "-62px";
        $("div").removeClass("inActive");
     }
   }
})

function openTabMenu(evt, TabMenu) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabMenu).style.display = "block";
  evt.currentTarget.className += " active";
}
var swiper1 = new Swiper("#tab-menu .mySwiper1", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
  },
});

var swiper3 = new Swiper("#tab-menu .mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 30,

});

var swiper4 = new Swiper("#tab-menu .mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 30,
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView:5,
  loop:true,
  spaceBetween:20,
  autoplay:{
      delay:3000,
      disableOnInteraction:false,
  },
  breakpoints:{
      0:{
          slidesPerView:1,
      },
      550:{
          slidesPerView:2,
      },
      800:{
          slidesPerView:4,
      },
      1000:{
          slidesPerView:5,
      },
  },
  pagination:{
      el:".swiper-pagination",
      clickable:true,
  }
});