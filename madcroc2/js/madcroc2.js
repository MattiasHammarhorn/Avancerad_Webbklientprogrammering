$(function(){ // jQuery 3.0 gör detta
	//1. logo go here
	$(".logo").click(function() {
	    $(".logo img").hide();
	});
	
	$(".slogan").click(function() {
	    $(".slogan").hide();
	});
	
	//4. Visa logo om du klickar på h1
		   $("h1").click(function() {
			 $(".logo img").show();
			 $(".slogan").show();
		   });
	
	//2. accordion control
	$('.accordion').show(function(){
	    $('.accordion-control').click(function(){ 	// Knappen
	       //$('.accordion-control').preventDefault(); //stoppa default knapp beteende
		
		   //3. accordion-panel
		   $(this).next('.accordion-panel')	// välj accordion-panel
		     .not(':animated')					// om den inte är animating
		     .slideToggle();					// toggla
	    });
	});
});