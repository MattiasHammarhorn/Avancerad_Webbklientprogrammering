var totaltrump = 0;
var totalputin = 0;

var clickstrump = 0;
var clicksputin = 0;

$(function(){
	
	$("#button1").click(function(){
		clickstrump++;
		
		var temp = random10(0);
		
		totaltrump = totaltrump + temp;
		
		$("#d1").append(" <b> " + temp + "total: " + totaltrump + "</b>");
	});
	
	$("#button2").click(function(){
		$("img").after("<i>After</i>"); //add after img
			elementdelete("#d1"); // delete element d1
			elementclear("#d4"); // clear element d4
			appendp();
	});
	
	$("#button5a").click(function(){
		var temp = random6a(0);
		
		$("#d5a").append(" <b> " + temp + " </b>");
	});
	
	function appendText(){
		
		var txt1 = "<p>Text.</p>"; //Create text with html
		
		var txt2 = $("<p></p>").text("Text."); //Create text with jQuery
		
		var txt3 = document.createElement('p');
		
		txt3.innerHTML = "Text."; //Create text with DOM
		
		$("body").append(txt1, txt2, txt3); //Append new elements
	}
	
	function elementdelete(whatx){
		$(whatx).remove();
	}
	
	function elementclear(whatx){
		$(whatx).empty();
	}
	
	function appendp(){
		$("body").append("<p>Look at all my trials and tribulations...</p>");
	}
	
	$(".append").click(function(){
		$(".append").append("<p><b>Test2</b></p><h1>Create me ***</h1>");
	});
	
	$(".list-items").click(function(){
		$(".list-items").find('li').append("<whitex><b>even </b></whitex>");
			alert("i was triggered by click");
			$(".list-items").find('li').append("<whitex><b>even </b></whitex>");
			alert("i was triggered by click");
	});
	
	function random10(number){
		var number2 = 0;
		
		number2 = Math.floor((Math.random() * 10) +1);
			return number2;
	}
	
	function random10a(number){
		var number2 = 0;
		
		number2 = Math.floor((Math.random() * 10) + 1);
			return number2;
	}
	
	function random6a(number) {
		alert(clicksputin);
		
		if(clicksputin <= 10){
			var number2 = 0;
		number2 = Math.floor((Math.random() * 6) + 1);
			return number2;
		} else {
			alert("more than 10")
			return ("max 10")
		}
	}
});