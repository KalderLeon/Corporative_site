
$(document).ready(function(){
  $('.row-slider').slick({
  	infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: false,
		nextArrow: false,
		dots: true,
		dotsClass: 'slider-pagination',
  	speed: 300,
  	responsive: [
  	{
  		breakpoint: 990,
  		settings: {
  			slidesToShow: 2,
				slidesToScroll: 2,
  		}
  	},
  	{
  		breakpoint: 600,
  		settings: {
  			slidesToShow: 1,
				slidesToScroll: 1,
			}
  	}
  	]
  });
});