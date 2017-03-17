$(window).load(function(){
  $(".pro_list img").click(function(){
    var img_src = $(this).attr("src");
    $(".mainimage img").attr("src", img_src);
  });
});