$(window).scroll(function(){
	if($(window).scrollTop() > 600) {
		$('.navbar-default').fadeIn(300);
	}
	else {
		$('.navbar-default').fadeOut(300);
	}
	
	if($(window).width() > 767) {
		if ($(this).scrollTop() > 600) {
			$('.scroll-up').fadeIn(300);
		} else {
			$('.scroll-up').fadeOut(300);
		}		
	}
});

$(document).ready(function() {	

	$("a.scroll[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(this.hash).offset().top}, 1000, function(){window.location.hash = hash;});
	});
	
	$('#skills-toggle').click(function() {
        $('#skills').slideToggle(500);
		$('.chart').easyPieChart({
			barColor: '#1ABC9C',
			trackColor: '#2F4254',
			scaleColor: false,
			lineCap: 'butt',
			lineWidth: 12,
			size:110,
			animate: 2000
		});
    });
	
	$('#overlay-hide').click(function() {
		$('#reference .reference-overlay').animate({opacity:0},1000);
		$('#reference-text').animate({opacity:0},1000);
	});
		
	$('.overlay-wrapper').mouseenter(function() {
		$(this).find('.overlay a:first-child').addClass('animated slideInLeft');
		$(this).find('.overlay a:last-child').addClass('animated slideInRight');
    });
	
	$('.overlay-wrapper').mouseleave(function() {
		$(this).find('.overlay a:first-child').removeClass('animated slideInLeft');
		$(this).find('.overlay a:last-child').removeClass('animated slideInRight');
    });
	
	$('.carousel').mouseenter(function() {
		$('.carousel-control').fadeIn(300);
	});
	
	$('.carousel').mouseleave(function() {
		$('.carousel-control').fadeOut(300);
	});

	function incrementValues() {
		
	}

	let initialDate = new Date('01-01-2020');
	var today = new Date();
	var diff = Math.floor((today - initialDate)/(1000*60*60*24)) // Days since Jan 1, 2020
	var hoursWorked = 8 * diff // 8 hours every day, 1 day not worked in 2020
	var coffeeCups = Math.ceil(1.25 * diff) // 1.25 average cup every day
	var codeWritten = Math.ceil(72.5 * diff)  // 72.5 average lines per day of deployed code
	var meetingHours = Math.ceil(0.8 * diff) // 0.8 average meeting hour per day
	var emailsAmount = Math.ceil(7.8 * diff) // 37.8 average emails per day
	var phoneClients = Math.ceil(0.4 * diff) // 0.4 average hours of phone time with client
	
	// Call countTo when scrolled to number section
	$('#separator').waypoint(function(){
		$('#hoursWorked').countTo({ from: 0, to: hoursWorked, speed: 1400 });
		$('#coffeeCups').countTo({ from: 0, to: coffeeCups, speed: 1400 });
		$('#codeWritten').countTo({ from: 0, to: codeWritten, speed: 1400 });
		$('#meetingHours').countTo({ from: 0, to: meetingHours, speed: 1400 });
		$('#emailsAmount').countTo({ from: 0, to: emailsAmount, speed: 1400 });
		$('#phoneClients').countTo({ from: 0, to: phoneClients, speed: 1400 });
	}, {offset:'85%'});
	
	if($(window).width() > 767) {
		$('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'90%'});
		$('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'90%'});
		$('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'90%'});
		$('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'70%'});
		
		$('.macbook-inner').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('black');},{offset:'70%'});
	}
});

