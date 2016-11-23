
	function playLuckysevens(){	
	var moneyInhand = document.getElementById("betid").value;
	
	var bet = parseInt(moneyInhand)
	var maxMon = moneyInhand;
	var startingInhand = moneyInhand
	var numOfrolls = 0
	var rollsAtmax = 0
	var diceOne
	var diceTwo
	var diceTotal
	var playagain = "PLAY AGAIN!"

		if (moneyInhand < 1){
			alert("You're broke... and can't play. GIVE ME AT LEAST A DOLLAR!");
		}

			else {
				alert("Let's play!");
			
			
			do {
				numOfrolls = ++numOfrolls;
				var diceOne = getRandomInt(1, 6);
				var diceTwo = getRandomInt(1, 6);
				var diceTotal = diceOne + diceTwo;
				alert("You rolled and got "+diceTotal);

				
				if (diceTotal==7){
					alert("Lucky Seven!");
					var moneyInhand = moneyInhand + 4;

					if (moneyInhand > maxMon){
						var maxMon = moneyInhand;
						var rollsAtmax = numOfrolls;
					}
				}
				
			
					else {
						var moneyInhand = moneyInhand - 1;
						alert("Sorry dude, you just lost a dollar. Now you have "+moneyInhand);
					}
				}
		while (moneyInhand > 1)
			alert("You're broke, and now you're being beaten up in a back alley.");
			alert("At the most, you had $ "+maxMon);
			alert("Here's how many rolls that took: "+rollsAtmax);
			showResults();
			betidf.innerHTML = bet;
			numOfrollsid.innerHTML = numOfrolls;
			maxMonid.innerHTML = maxMon;
			rollsAtmaxid.innerHTML = rollsAtmax;
			playa.innerHTML = playagain;

		}	
		}

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}


function doLoadStuff() {
   hideResults();
   hideInstructions();
}

function hideResults() {
   var divResults = document.getElementById("results");
   divResults.style.display = "none";
}

function showResults() {
   var divResults = document.getElementById("results");
   divResults.style.display = "block";
}





