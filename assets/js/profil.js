$(function() {

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


   // $('#singup input').blur(function(){
   //    var inputValue = $(this).val();
   //    if ( inputValue == "" ) {
   //      $(this).removeClass('filled');
   //      $(this).parents('.input').removeClass('focused');  
   //    } else {
   //      $(this).addClass('filled');
   //    }
   //  })

})