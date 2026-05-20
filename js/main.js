$(document).ready(function(){


	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter (replaces broken counterUp + Waypoints 2.x under jQuery 3.x)
	var counters = document.querySelectorAll('.counter');
	if (counters.length && 'IntersectionObserver' in window) {
		var animate = function (el) {
			var target = parseInt(el.textContent, 10) || 0;
			var finalText = el.getAttribute('data-final-text');
			var duration = 1000;
			var start = null;
			el.textContent = '0';
			var step = function (ts) {
				if (!start) start = ts;
				var p = Math.min((ts - start) / duration, 1);
				el.textContent = Math.floor(p * target);
				if (p < 1) {
					requestAnimationFrame(step);
				} else {
					el.textContent = finalText || target;
				}
			};
			requestAnimationFrame(step);
		};
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					animate(entry.target);
					io.unobserve(entry.target);
				}
			});
		}, { threshold: 0.25 });
		counters.forEach(function (el) { io.observe(el); });
	}


});




