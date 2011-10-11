$(function() {

	// Auto scroll to hide URL bar on mobile browsers
	// When ready...
	window.addEventListener("load",function() {
	  // Set a timeout...
	  setTimeout(function(){
	    // Hide the address bar!
	    window.scrollTo(0, 1);
	  }, 0);
	});
	
	// Watch for change between portrait and landscape modes
	addEventListener("load", function()
	{
	    setTimeout(updateLayout, 0);
	}, false);

	var currentWidth = 0;

	function updateLayout()
	{
	    if (window.innerWidth != currentWidth)
	    {
	        currentWidth = window.innerWidth;

	        var orient = currentWidth == 320 ? "profile" : "landscape";
	        document.body.setAttribute("orient", orient);
	        setTimeout(function()
	        {
	            window.scrollTo(0, 1);
	        }, 100);           
	    }
	}

	setInterval(updateLayout, 400);
});