$(function() {
	//click open mobile side menu
	$("#mobile-menu").click(function() {
 	 $('.side-menu').addClass('open');
  });
	$(".side-menu .close-menu").click(function() {
 	 $('.side-menu').removeClass('open');
  });

	// read more about us text
	$(".about-txt .more").click(function() {
	 $('.about-txt').addClass('height');
	 $(this).addClass('hide');
	});

	//click popup callback
	$("#mob-callback").click(function() {
 	 $('#popup').addClass('open');
  });
	$("#popup .close").click(function() {
 	 $('#popup').removeClass('open');
  });
	//click popup
	$("#popupForm").click(function() {
 	 $('#popup').addClass('open');
  });
	$("#popup .close").click(function() {
 	 $('#popup').removeClass('open');
  });

	// 'это  список вызовов попапа на всех страницах - удалить после приклейки верстки!!!'
	// //click popup
	// $("#popupForm1").click(function() {
 	//  $('#popup').addClass('open');
  // });
	// $("#popup .close").click(function() {
 	//  $('#popup').removeClass('open');
  // });
	// //click popup
	// $("#popupForm2").click(function() {
 	//  $('#popup').addClass('open');
  // });
	// $("#popup .close").click(function() {
 	//  $('#popup').removeClass('open');
  // });
	// //click popup
	// $("#popupForm3").click(function() {
 	//  $('#popup').addClass('open');
  // });
	// $("#popup .close").click(function() {
 	//  $('#popup').removeClass('open');
  // });
	// //click popup
	// $("#popupForm4").click(function() {
 	//  $('#popup').addClass('open');
  // });
	// $("#popup .close").click(function() {
 	//  $('#popup').removeClass('open');
  // });
	// //click popup
	// $("#popupForm5").click(function() {
 	//  $('#popup').addClass('open');
  // });
	// $("#popup .close").click(function() {
 	//  $('#popup').removeClass('open');
  // });
  //topscroll
	$(window).scroll(function () {
		var sc = $(window).scrollTop()
		if (sc > 455) {
			$("#header").addClass("small")
		}
		else {
			$("#header").removeClass("small")
		}
	});
  //topscroll
  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 1000) {
      $(".backtop").addClass("show")
    }
    else {
      $(".backtop").removeClass("show")
    }
  });
	$('.backtop').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
// path to block
$(document).ready(function(){
    $("#links").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(document).ready(function(){
    $("#links-mob").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
  //bx slider homepage
  $('.bxslider').bxSlider({
    auto: true,
    mode: 'fade',
    captions: true,
    infiniteLoop: true,
    controls:false,
    pause:4000,
		speed:800
  });
  //anchor header
  $(window).scroll(function() {
    var anchb = $('.anchorheader');
    var top_of_element = anchb.offset().top;
    var bottom_of_element = anchb.offset().top + anchb.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      $('#header').addClass('hide');
			$('#header-mobile').addClass('hide');
    }
    else {
      $('#header').removeClass('hide');
			$('#header-mobile').removeClass('hide');
    }
  });
  //anchor charter
  $(window).scroll(function() {
    var anchb = $('.anchor1');
    var top_of_element = anchb.offset().top;
    var bottom_of_element = anchb.offset().top + anchb.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      $('.block1').addClass('fadeInUp show');
    }
    else {}
  });
  $(window).scroll(function() {
    var anchb = $('.anchor2');
    var top_of_element = anchb.offset().top;
    var bottom_of_element = anchb.offset().top + anchb.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      $('.block2').addClass('fadeInUp show');
    }
    else {}
  });
  $(window).scroll(function() {
    var anchb = $('.anchor3');
    var top_of_element = anchb.offset().top;
    var bottom_of_element = anchb.offset().top + anchb.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      $('.block3').addClass('fadeInUp show');
    }
    else {}
  });
  $(window).scroll(function() {
    var anchb = $('.anchor4');
    var top_of_element = anchb.offset().top;
    var bottom_of_element = anchb.offset().top + anchb.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      $('.block4').addClass('fadeInUp show');
    }
    else {}
  });
  $(window).scroll(function() {
    var anchb = $('.anchor5');
    var top_of_element = anchb.offset().top;
    var bottom_of_element = anchb.offset().top + anchb.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
    var top_of_screen = $(window).scrollTop();
    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      $('.block5').addClass('fadeInUp show');
    }
    else {}
  });
	//contact map image
	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;
	function moveBackground() {
	  x += (lFollowX - x) * friction;
	  y += (lFollowY - y) * friction;
	  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
	  $('.bg-map').css({
	    '-webit-transform': translate,
	    '-moz-transform': translate,
	    'transform': translate
	  });
	   window.requestAnimationFrame(moveBackground);
	}
	$(window).on('mousemove click', function(e) {
	  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
	  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	  lFollowY = (10 * lMouseY) / 100;
	});
	moveBackground();
});
