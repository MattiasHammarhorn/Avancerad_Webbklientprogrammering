// Global variables

var Player1 = new Player(10, true, false, "Trump", 1, "Level 1", 500, 2 ,4, 1, 2);
var Player2 = new Player(10, false, false, "Putin", 1, "Level 1", 500, 2, 4, 1, 2);

// Trump += playerList;
// Putin += playerList;

var gameElements = [
	"Resources",
	"Technology",
	"Money",
	"Attack",
	"Defence"
];

var playerList = [Player1, Player2];

// Constructor for JS object "Player". Since JS does not have
// "real" objects, this will have to suffice.
function Player(health, isTurn, hasLost, 
character, resources, technology, money, 
minDamage, maxDamage, minDefence, maxDefence){
	this.health = health;
	this.isTurn = isTurn;
	this.hasLost = hasLost;
	this.character = character;
	this.resources = resources;
	this.technology = technology;
	this.money = money;
	this.minDamage = minDamage;
	this.maxDamage = maxDamage;
	this.minDefence = minDefence;
	this.maxDefence = maxDefence;
}

function initializePlayerElements(){
	for(var i = 0; i < playerList.length; i++){
		playerList[i].createButtons();
		playerList[i].createTabs();
		playerList[i].createAvatar();
		playerList[i].updateHPDisplays();
	}
}

function resetPlayerElements(){
	Player1.health = 10;
	Player2.health = 10;
	Player1.isTurn = true;
	Player2.isTurn = false;
	Player1.hasLost = false;
	Player2.hasLost = false;
	Player1.character = "Trump";
	Player2.character = "Putin";
	Player1.resources = 1;
	Player2.resources = 1;
	Player1.technology = "Level 1";
	Player2.technology = "Level 1";
	Player1.money = 500;
	Player2.money = 500;
	Player1.minDamage = 2;
	Player2.minDamage = 2;
	Player1.maxDamage = 4;
	Player2.maxDamage = 4;
	Player1.minDefence = 1;
	Player2.minDefence = 1;
	Player1.maxDefence = 2;
	Player2.maxDefence = 2;
	
	Player1.updateHPDisplays();
	Player2.updateHPDisplays();
}

// The Player attacks. The parameter is the other player.
Player.prototype.attackPlayer = function(otherPlayer){
	
	// If it is this player's turn.
	if(this.isTurn == true && this.hasLost == false){
		// Then deal damage to the other Player
		this.dealDamage(otherPlayer);
		// Switch turns between the players
		this.isTurn = false;
		otherPlayer.isTurn = true;
		
	} else if (this.hasLost == true){
		alert("You've already dead!");
	} else if (otherPlayer.hasLost == true){
		// If not, then alert the player that it is not his turn.
		alert(otherPlayer.character + " is already dead!");
	} else {
		reportIllegalMove();
	}
}

// The Player deals damage. The parameter is the other player. 
Player.prototype.dealDamage = function(otherPlayer){
	
	// Gets a random value from 1 to 10.
	var damage = randomizeDamage(this.minDamage, this.maxDamage);
	// The other player takes damage from the damage.
	otherPlayer.takeDamage(damage);
	$(".damageOutput").html(this.character + ": " + damage);
}

Player.prototype.takeDamage = function(damage){
	var defence = randomizeDefence(this.minDefence, this.maxDefence);
	// The Player taking damage has its' health subtracted by value.
	damage -= defence;
	$(".defenceOutput").html(this.character + ": " + defence);
	this.health -= damage;
	
	// The Player's health is updated
	this.updateHPDisplays();
}

Player.prototype.updateHPDisplays = function(){
	if(this.health <= 0){
		$("#" + this.character + "HPDisplay").text(this.character + " HP: 0");
		this.lostGame();
	} else {
		$("#" + this.character + "HPDisplay").text(this.character + " HP: " + this.health);
	}
}

Player.prototype.createButtons = function() {
	
	// Initializes the Player's field as a variable
	var field = document.getElementsByClassName(this.character + "-field");
	
	// Initializes a div-tag for the buttons
	var listDiv = document.createElement("div");
	var unorderedList = document.createElement("ul");
	
	listDiv.setAttribute("class", this.character + "-buttons");
		
		// Loops and creates six list items with buttons in them
		for(var i = 0; i < 5; i++){
			var listItem = document.createElement("li");
			var listButton = document.createElement("button");
			
			listButton.setAttribute("id", this.character + "-" + [i + 1]);
			listButton.textContent = gameElements[i];
			
			listItem.appendChild(listButton);
			unorderedList.appendChild(listItem);
		}
	listDiv.appendChild(unorderedList);
	field[0].appendChild(listDiv);
}

Player.prototype.createTabs = function(){
	var field = document.getElementsByClassName(this.character + "-field");
	var tableDiv = document.createElement("div");
	var table = document.createElement("table");
	
	tableDiv.setAttribute("class", this.character + "-tabs");
	
	for(var i = 0; i < 5; i++){
		var row = document.createElement("tr");
		for(var j = 0; j < 2; j++){
			
			var cell = document.createElement("td");
			if (j == 0){
				var cellText = document.createTextNode(gameElements[i]);
			} else if (i == 0 && j == 1) {
				var cellText = document.createTextNode(this.resources);
			} else if (i == 1 && j == 1) {
				var cellText = document.createTextNode(this.technology);
			} else if (i == 2 && j == 1) {
				var cellText = document.createTextNode(this.money);
			} else if (i == 3 && j == 1) {
				var cellText = document.createTextNode(this.minDamage + "-" + (this.maxDamage + 1));
			} else if (i == 4 && j == 1) {
				var cellText = document.createTextNode(this.minDefence + "-" + (this.maxDefence + 1));
			} else {
				var cellText = document.createTextNode(this.isTurn);
			}
			
			cell.appendChild(cellText);
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	tableDiv.appendChild(table);
	field[0].appendChild(tableDiv);
}

Player.prototype.createAvatar = function(){
	var field = document.getElementsByClassName(this.character + "-field");
	var playerAvatar = document.createElement("img");
	
	playerAvatar.setAttribute("src", "img/" + this.character + "-avatar.png");
	playerAvatar.setAttribute("width", "200");
	playerAvatar.setAttribute("height", "200");
	
	field[0].appendChild(playerAvatar);
}

Player.prototype.lostGame = function(){
	this.hasLost = true;
	alert(this.character + " has lost!");
	// $("." + this.character + "-field").children().fadeOut(5000);
}

function reportIllegalMove(){
	alert("Not your turn!");
}

function randomizeDamage(minDamage, maxDamage){
	return Math.floor((Math.random() * maxDamage) + minDamage);
}

function randomizeDefence(minDefence, maxDefence){
	return Math.floor((Math.random() * maxDefence) + minDefence);
}

/********** GRAPHICAL functions **********/

$(function(){
	
	$("#" + Player1.character + "-4").on("click", function(){
		Player1.attackPlayer(Player2);
	});
	
	$("#" + Player2.character + "-4").on("click", function(){
		Player2.attackPlayer(Player1);
	});
});

/********** NON-FUNCTIONING functions **********/
