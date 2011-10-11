// Core global JS functions
$(function() {
	
// Global initializations
	$(document).ready(function() {
		$('.toggle').hide(); // Global hide function. Use this to hide anything on the page when the document loads.
		$('input, textarea').placeholder(); // Sets up placeholder for browsers w/o native support
	});
	
	$('.flash').click(function() { 
		$(this).slideUp('fast');
	});
	
//	$('.flash').fadeIn( function() {
//		  setTimeout( function() {
//		  	$(".flash.success").fadeOut("fast");
//		}, 5000);
//	});
		
});

$(function() {
	
	$('.do-action.toggler').click(function(event) { // show element based on rel
		var hook = $(this).attr('rel');
		var path = $('[rel='+hook+']');
		$(path).toggle('fast');
		event.preventDefault();
	});

	$('.do-action.show').click(function(event) { // show element based on rel
		var hook = $(this).attr('rel');
		var path = $('[rel='+hook+']');
		$(path).slideDown('fast');
		event.preventDefault();
	});
	
	$('.do-action.hide').click(function(event) { // hide element based on rel
		var hook = $(this).attr('rel');
		var path = $('[rel='+hook+']');
		$(path).slideUp('fast');
		event.preventDefault();
	});

	$('.toggle-this').click(function() {
		$(this).toggle();
	});
	
// Show/hide element and parent element using the data- attribute in HTML5. 
// Use relevant data- attribute on CTA and enter the id or class you want to toggle

	$('.toggle-swap').click(function() { 
		var toggle_parent = $(this).attr('data-hide-parentid');
		if (toggle_parent == null) {
			toggle_parent = $(this).attr('data-hide-selector');
		}
		if (toggle_parent == null) {
			$(this).toggle();
		} else {
			$(toggle_parent).slideUp('fast');
		}
		
		var toggler = $(this).attr('data-show-parentid');
		if (toggler == null) {
			toggler = $(this).attr('data-show-selector');
		}
		$(toggler).slideDown('fast');
	});
	
});