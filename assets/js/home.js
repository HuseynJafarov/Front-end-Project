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