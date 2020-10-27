
$("video").css("opacity","0.5");


$("video").on("mouseenter",function(){
	$(this).trigger("play");
      $(this).autoplay = true;
      $(this).css("opacity","1");
});

$("video").on("mouseleave",function(){
	$(this).trigger("pause");
      $(this).autoplay = false;
      $(this).css("opacity","0.5");

});