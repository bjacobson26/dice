var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");
var yourNum = document.getElementById("yourNum");
var rollButton = document.getElementById('rollDice');
var winLose = document.getElementById('winLose');
var yourNumber = null;
var roll2 = null;
var wallet = document.getElementById('wallet');
var userMoney;
var bet;
var bet_is = false;
var keepgoing = true;
var playAgain = document.getElementById('playAgain');


if(localStorage.getItem('money') == null){
	userMoney = 20;
}
else{
	userMoney = localStorage.getItem('money');
}

wallet.innerHTML = "Wallet: " + "$" + userMoney;

rolldice = function(){
		var dice1Num = Math.floor(Math.random() * 6) + 1;
		var dice2Num = Math.floor(Math.random() * 6) + 1;
		dice1.innerHTML = dice1Num;
		dice2.innerHTML = dice2Num;

		if(yourNumber === null){
		yourNumber = dice1Num + dice2Num;
		yourNum.innerHTML = "Your Number: " + (dice1Num + dice2Num);
		}
		else{
			roll2 = dice1Num + dice2Num
			console.log(roll2);
		}

};

win = function(){
	winLose.innerHTML = "YOU WON!";
	rollButton.style.display = "none";
	userMoney = Math.round(userMoney + (bet * 2)) * 100 / 100;
	wallet.innerHTML = "Wallet: " + "$" + userMoney;
	localStorage.setItem('money', Math.round(userMoney * 100) / 100);
	playAgain.style.display = "block";
	playAgain.onclick = function(){
		location.reload();
	}

}

lose = function(){
	winLose.innerHTML = "YOU LOSE!";
	rollButton.style.display = "none";
	playAgain.style.display = "block";
	playAgain.onclick = function(){
		location.reload();
	}
}

checkwin = function(){
	if(yourNumber === 7 || yourNumber === 11){
		win();
	}
	else if(yourNumber === 2 || yourNumber === 12){
		lose();
	}
	else if(roll2 === 7 || roll2 === 11){
		lose();
	}
	else if(roll2 === yourNumber){
		win();
	}
}

getBet = function(){
	bet = document.getElementById('bet').value
	if(userMoney - bet < 0){
		alert("SORRY, YOU DON'T HAVE ENOUGH MONEY TO BET THAT MUCH!");
		location.reload();

	}
	else{
		userMoney = userMoney - bet;
	wallet.innerHTML = "Wallet: " + "$" + userMoney;
	console.log("user bets: " + bet);
	localStorage.setItem('money', Math.round(userMoney * 100) / 100);
	bet_is = true;
	}

}

play = function(){

if(userMoney > -1){
	if(bet_is == false){
		getBet();
	}
	if(keepgoing == true){
		rolldice();
		checkwin()
	}
}
else{
	alert("YOU HAVE NO MONEY! GO HOME!");
}
};