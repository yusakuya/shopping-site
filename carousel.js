$(window).load(function(){
  $("#list_img img").click(function(){
     var img_src = $(this).attr("src");
     $("#display_img img").attr("src", img_src);
  });
});

$(document).ready(function(){
  $("#menu_icon").click(function(){
    $(".menu_li_sp").slideToggle();
  });
});

$(document).ready(function(){
$('.owl-carousel').owlCarousel(
    {
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
        }
);
});

$(window).load(function(){
  $(".pro_list img").click(function(){
    var img_src = $(this).attr("src");
    $(".mainimage img").attr("src", img_src);
  });
});