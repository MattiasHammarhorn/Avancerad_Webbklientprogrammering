$(function(){
	$('.logo').hide().fadeIn(5000);
	$('h1').hide().fadeIn(5000);
	
	$('body').click(function(event){
		$('#log').text('Clicked: ' + event.target.nodeName);
	});
	
	$('.tab-list a').click(function(event){
		var currentAttrValue = jQuery(this).attr('href');
		$('.tabs ' + currentAttrValue).show().siblings().hide();
		
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		
		event.preventDefault();
	});
	
	$('#log-version').text('You are running jQuery version ' + jQuery().jquery);
});