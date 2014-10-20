  $(window).load(function() {
    $('.flexslider').flexslider({
    	animation: "slide",
    	controlNav: false
    });
  });

  $(document).ready(function(){
  	$('.ourStory a').smoothScroll({
  		offset: -50
  	});
  });