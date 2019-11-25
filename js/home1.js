$(document).ready(function(){
	// Slideshow 4
	$("#slider4").responsiveSlides({
		auto: true,
		speed: 500,
		timeout: 4000,
		pager: false,
		nav: true,
		speed: 500,
		namespace: "callbacks",
		before: function () {
		  $('.events').append("<li>before event fired.</li>");
		},
		after: function () {
		  $('.events').append("<li>after event fired.</li>");
		}
	});
	$(".sakrij_meni").click(function(){
		$(".menu").toggleClass("open");
		$('.menu-overlay').fadeOut('500');
		/*$("#instafb").toggleClass("pokazisakrij");
		$("#dogadjaji").toggleClass("pokazisakrij");
		$("#wrapper").toggleClass("pokazisakrij");*/
	  
	});
	$(".menu-link").click(function(e) {
		e.preventDefault();
		$(".menu").toggleClass("open");
		/*$(".menu-overlay").toggleClass("otvoreno");	*/
		 if($('.menu-overlay').css('display') == "none"){
			
			 $('.menu-overlay').fadeIn('500');
			}
			else{
				$('.menu-overlay').fadeOut('500');
			}
		/*$("#instafb").toggleClass("pokazisakrij");
		$("#dogadjaji").toggleClass("pokazisakrij");
		$("#wrapper").toggleClass("pokazisakrij");*/
		
		

	});
	
	/*$(window).on("scroll", function() {
	  var currentPos = $(window).scrollTop();

	  $('.nav li a').each(function() {
		var sectionLink = $(this);
		// capture the height of the navbar
		var navHeight = $("header").outerHeight() + 1;
		var section = $(sectionLink.attr('href'));

		// subtract the navbar height from the top of the section
		if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
		  $('.nav li').removeClass('aktivan');
		  sectionLink.parent().addClass('aktivan');
		} else {
		  sectionLink.parent().removeClass('aktivan');
		}
	  });        
	});*/
	
	$(window).scroll(function(){
		if($(window).width() > 500){
			if($(document).scrollTop() > 10) {
				$('header').addClass('change');
				$('nav').addClass('promena');
			}
			else {
			$('header').removeClass('change');
			$('nav').removeClass('promena');

			}
		}		
		 $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
				if($(window).width()< 800)
				{
					$(this).animate({'opacity':'1'},500);
				}
				else
				{
					$(this).animate({'opacity':'1'},1300);
				}
            }
            
        }); 
    
	});
	
				
	  // Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links $
		
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	});

	var count = 0;
	$( "#strelica" ).click(function(){
		var upClass = 'toggle-up';
		var downClass = 'toggle-down';
		var square = document.querySelector('#strelica');
		  
		  if (~square.className.indexOf(downClass)) {
			square.className = square.className.replace(downClass, upClass);
		  } else {
				square.className = square.className.replace(upClass, downClass);
		  }
		count++;
		var isEven = function(someNumber) {
			return (someNumber % 2 === 0) ? true : false;
		};
		if (isEven(count) === false) {
			
			if($(window).width()< 800){
			document.getElementById("strelica").style.display = "none";
			$( "#flajer" ).animate({ "top": "-=170px" }, "slow" );
			$( "#meniul" ).animate({ "top": "+=260px" }, "slow" );
			document.getElementById("meniul").style.display = "block";
			document.getElementsByClassName("sakrijnavelikom").style.display = "block";
			
			}
			else{
				$( "#flajer" ).animate({ "left": "-=200px" }, "slow" );
				$( "#meniul" ).animate({ "left": "+=180px" }, "slow" );
				$( "#strelica" ).animate({ "left": "+=230px" }, "slow" );
			}
		} else if (isEven(count) === true) {
			
				if($(window).width()< 800){
			
			}
			else{
				$( "#flajer" ).animate({ "left": "+=200px" }, "slow" );
				$( "#meniul" ).animate({ "left": "-=180px" }, "slow" );
				$( "#strelica" ).animate({ "left": "-=230px" }, "slow" );
				
			}
		}
		
	});
	
	$(".meni").click(function() {
		document.getElementById("zatamnjenje").style.display = "block";
		var id = "m" + this.id;
		
		document.getElementById("heder").style.zIndex = "1";
		document.getElementById(id).style.display = "block";
		document.getElementById("xdugme").style.display = "block";
		
		$("#xdugme").click(function() {
		document.getElementById("zatamnjenje").style.display = "none";
		document.getElementById("heder").style.zIndex = "1000";
		document.getElementById(id).style.display = "none";
		document.getElementById("xdugme").style.display = "none";
	    });
		
	});
	
});
function myMap() {
	  var myCenter = new google.maps.LatLng(43.317238,21.905266);
	  var mapCanvas = document.getElementById("map");
	  var mapOptions = {center: myCenter, zoom: 16,};
	  var map = new google.maps.Map(mapCanvas, mapOptions);
	  var marker = new google.maps.Marker({position:myCenter, animation: google.maps.Animation.BOUNCE});
	  marker.setMap(map);
	}

