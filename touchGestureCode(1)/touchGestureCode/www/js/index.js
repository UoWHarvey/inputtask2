<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color','red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
    });
    
    $

var paused_count =0;
var resumed_count = 0;
var launched_count = 0;

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }


});
// Define a click binding for all anchors in the page
$( "a" ).on( "click", function( event ) {

	// Prevent the usual navigation behavior
	event.preventDefault();

	// Alter the url according to the anchor's href attribute, and
	// store the data-foo attribute information with the url
	$.mobile.navigate( $(this).attr( "href" ), {
		foo: $(this).attr("data-foo")
	});

	// Hypothetical content alteration based on the url. E.g, make
	// an Ajax request for JSON data and render a template into the page.
	alterContent( $(this).attr("href") );
});
// Respond to back/forward navigation
$( window ).on( "navigate", function( event, data ){
	if ( data.state.foo ) {
		// Make use of the arbitrary data stored
	}

	if ( data.state.direction == "back" ) {
		// Make use of the directional information
	}

	// reset the content based on the url
	alterContent( data.state.url );
});
// Bind to the navigate event
$( window ).on( "navigate", function() {
	console.log( "navigated!" );
});

// Bind to the click of the example link
$( "#event-example" ).click(function( event ) {
	event.preventDefault();
	location.hash = "foo";
});
