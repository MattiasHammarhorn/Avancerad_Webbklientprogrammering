var trumpHealthPoints = 20;
var putinHealthPoints = 20;

var trumpTurn = true;
var putinTurn = false;

var trumpAttackPointsMin = 3;
var putinAttackPointsMin = 2;

var trumpAttackPointsMax = 5;
var putinAttackPointsMax = 5;

var gameHasEnded = false;

$(function() {
	
	$("#trumpHPDisplay").append("<p>Trump HP: " + trumpHealthPoints + "</p>"); // Show Trump HP
	$("#putinHPDisplay").append("<p>Putin HP: " + putinHealthPoints + "</p>"); // Show Putin HP
	$("#Trump-dmg").text(trumpAttackPointsMin + "-" + 7);  // Show Trump min and max DMG
	$("#Putin-dmg").text(putinAttackPointsMin + "-" + 6);  // Show Putin min and max DMG
	$("#Trump-turn").text(trumpTurn); // Show if Trump's turn is true or false
	$("#Putin-turn").text(putinTurn); // Show if Putin's turn is true or false
	
	/********** ATTACK Functions **********/
	
	$("#button1").click(function() {
		
		if(trumpTurn == true){ // If it's Trump's turn
			
			var trumpDamage = damageCalc(trumpAttackPointsMin, trumpAttackPointsMax); // Collect a random value
			
			putinHealthPoints = putinHealthPoints - trumpDamage; // Subtract Putin's HP by Trump's damage
			
			if(putinHealthPoints <= 0){
				$("#putinHPDisplay").html("<p>Putin HP: 0</p>"); // Display Putin's HP as 0
				trumpWin();
			} else if(gameHasEnded == true){
				alert("The game is over!");
			} else {
				$("#putinHPDisplay").html("<p>Putin HP: " + putinHealthPoints + "</p>"); // Update Putin's HP
			}
			
			$("#diva1").text("Damage output: " + trumpDamage);  // Show Trump's damage output
			
			trumpTurn = false;
			$("#Trump-turn").text(trumpTurn); // Show if Trump's turn is true or false
			putinTurn = true;
			$("#Putin-turn").text(putinTurn); // Show if Putin's turn is true or false
		} else {
			alert("Putin's turn!");
		}
	});
	
	$("#button4").click(function() {
		
		if(putinTurn == true){
			
			var putinDamage = damageCalc(putinAttackPointsMin, trumpAttackPointsMax);
			
			trumpHealthPoints = trumpHealthPoints - putinDamage; // Subtract Trump's HP by Putin's DMG
			
			if(trumpHealthPoints <= 0){ // If Trump's HP reaches zero
				$("#trumpHPDisplay").html("<p>Trump HP: 0</p>");
				putinWin();
			} else if(gameHasEnded == true){
				alert("The game is over!");
			} else {
				$("#trumpHPDisplay").html("<p>Trump HP: " + trumpHealthPoints + "</p>");
			}
			$("#diva4").text("Damage output: " + putinDamage);
			
			putinTurn = false;
			$("#Putin-turn").text(putinTurn); // Show if Putin's turn is true or false
			trumpTurn = true;
			$("#Trump-turn").text(trumpTurn); // Show if Trump's turn is true or false
		} else {
			alert("Trump's turn!");
		}
	});
	
	/********** PASS functions **********/
	
	$("#button2").click(function(){
		
		if(trumpTurn == true){
			$("#diva1").text("Passed turn!");
			
			trumpTurn = false;
			putinTurn = true;
		} else if(gameHasEnded == true){
				alert("The game is over!");
		} else {
			alert("Putin's turn!");
		}
	});
	
	$("#button5").click(function(){
		
		if(putinTurn == true){
			$("#diva4").text("Passed turn!");
			
			trumpTurn = true;
			putinTurn = false;
		}  else {
			alert("Trump's turn!");
		}
	});
	
	/********** SURRENDER functions **********/
	
	$("#button3").click(function(){
		
		if(trumpTurn == true){
			
			putinWin();
			gameHasEnded = true;
		} else {
			alert("Putin's turn!");
		}
		
	});
	
	$("#button6").click(function(){
		
		if(putinTurn == true){
			
			trumpWin();
			gameHasEnded = true;
		} else {
			alert("Trump's turn!");
		}
	});
	
	
	/********** END functions **********/
	
	function trumpWin(){
		$(".End-game").html("<p>TRUMP WINS!</p>");
		$("#Putin").fadeOut(5000);
		$("#Putin-dmg").empty();
		$("#Putin-turn").empty();
		replayPrompt();
	}
	
	function putinWin(){
		$(".End-game").html("<p>PUTIN WINS!</p>");
		$("#Trump").fadeOut(5000);
		$("#Trump-dmg").empty();
		$("#Trump-turn").empty();
		replayPrompt();
	}
	
	function replayPrompt(){
		$(".End-game").append("<button id='replay'>REPLAY</button>");;
		
	}
	
	$(".End-game").on('click', '#replay', function(){
		$("#replay").click(function(){
			trumpHealthPoints = 20;
			putinHealthPoints = 20;

			trumpTurn = true;
			putinTurn = false;

			trumpAttackPointsMin = 3;
			putinAttackPointsMin = 2;

			trumpAttackPointsMax = 5;
			putinAttackPointsMax = 5;

			gameHasEnded = false;
			$("#Trump").show();
			$("#Putin").show();
			$(".End-game").empty();
			$("#Trump-dmg").text(trumpAttackPointsMin + "-" + 7);
			$("#Putin-dmg").text(putinAttackPointsMin + "-" + 6);
		
			$("#trumpHPDisplay").text("Trump HP: " + trumpHealthPoints);
			$("#putinHPDisplay").text("Putin HP: " + putinHealthPoints);
			$("#Trump-turn").text(trumpTurn);
			$("#Putin-turn").text(putinTurn);
		});
	});
	
	/********** RANDOM functions **********/
	
	function damageCalc(min, max){
		return Math.floor((Math.random() * max) + min);
	}
	
	$("#Rrreee").click(function(){
		alert("Rrreee!");
	});
	
	$(function(){ // Pre-built jQuery UI functions!
		$( ".widget button" )
		.eq( 0 ).button()
		.end().eq( 1 ).button({
		icon: "ui-icon-gear",
		showLabel: false})
		.end().eq( 2 ).button({
		icon: "ui-icon-gear"
		}).end().eq( 3 ).button({
		icon: "ui-icon-gear",iconPosition: "end"
		}).end().eq( 4 ).button({
		icon: "ui-icon-gear",
		iconPosition: "top"
		} ).end().eq( 5 ).button( {
		icon: "ui-icon-gear",
		iconPosition: "bottom"
		});
	});
})