var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('header').toggleClass('open');
		})

		$('.phone-mask').mask("+380(99) 999-99-99");

		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 2000);
		});

		$('.popup-login').click(function(event){
			event.preventDefault();
			$('#loginPopup').addClass('active');
			$('header').removeClass('open');
		});

		$('.popup-close').click(function(event){
			event.preventDefault();
			$('.popup-wrapper').removeClass('active');
		});
	},
	owl: function(){
		$('.play-slider').owlCarousel({
			nav:true,
			dots: false,
			loop: true,
			smartSpeed: 1000,
			margin: 0,
			items: 1
		});

		$('.drones-slider').owlCarousel({
			nav:true,
			dots: false,
			loop: true,
			smartSpeed: 1000,
			margin: 100,
			items: 2,
			responsive:{
				0:{
					items:1
				},
				993:{
					items:1
				},
				994:{
					items:2
				}
			}
		});
	}

};

(function() {
	common.init();
}());
