$('.responsive').slick({
	dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 960,
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