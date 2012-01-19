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
	
	$('.flash').fadeIn( function() {
		  setTimeout( function() {
		  	$(".flash.success").fadeOut("fast");
		}, 5000);
	});
		
});

$(function() {

	// Auto scroll to hide URL bar on mobile browsers
	// When ready...
	window.addEventListener('load',function() {
	  // Set a timeout...
	  setTimeout(function(){
	    // Hide the address bar!
	    window.scrollTo(0, 1);
	  }, 0);
	});
	
	// Watch for change between portrait and landscape modes
	addEventListener('load', function()
	{
	    setTimeout(updateLayout, 0);
	}, false);

	var currentWidth = 0;

	function updateLayout()
	{
	    if (window.innerWidth != currentWidth)
	    {
	        currentWidth = window.innerWidth;

	        var orient = currentWidth == 320 ? 'profile' : 'landscape';
	        document.body.setAttribute('orient', orient);
	        setTimeout(function()
	        {
	            window.scrollTo(0, 1);
	        }, 100);           
	    }
	}

	setInterval(updateLayout, 400);
});