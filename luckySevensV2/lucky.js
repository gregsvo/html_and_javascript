
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
				
			
				do {
					numOfrolls = ++numOfrolls;
					var diceOne = Math.floor(Math.random() * (1 - 6 + 1) + min);
					var diceTwo = Math.floor(Math.random() * (1 - 6 + 1) + min);
					var diceTotal = diceOne + diceTwo;
					
						if (diceTotal==7){
							
							var moneyInhand = moneyInhand + 4;

							if (moneyInhand > maxMon){
								var maxMon = moneyInhand;
								var rollsAtmax = numOfrolls;
							}
						}
						
					
						else {
							var moneyInhand = moneyInhand - 1;
							}

					}

				while (moneyInhand > 0)
					showResults();
					betidf.innerHTML = bet;
					numOfrollsid.innerHTML = numOfrolls;
					maxMonid.innerHTML = maxMon;
					rollsAtmaxid.innerHTML = rollsAtmax;
					playa.innerHTML = playagain;

					}
			
		} //end of function bracket

function doLoadStuff() {
   hideResults();
}

function hideResults() {
   var divResults = document.getElementById("results");
   divResults.style.display = "none";
}

function showResults() {
   var divResults = document.getElementById("results");
   divResults.style.display = "block";
}





