$(function() {

	// Custom JS

  // navbar hamburger

    $('.hamburger').click(function() {
	  	$('.js-navbar').toggleClass('nav-show');
	});


  // phone toggle
  $('.js-phone-toggle')
  .click(function() {
    $( this ).parent().find( '.consultant-section__phones-answer' ).toggle(200)
  });


});
