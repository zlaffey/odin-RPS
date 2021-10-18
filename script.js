let playerScore = 0;
let computerScore = 0;

while (playerScore < 5 && computerScore < 5) {
	function computerPlay() {
		let choices = ["rock", "paper", "scissors"];

		return choices[Math.floor(Math.random() * choices.length)];
	}

	function playRound(playerSelection, computerSelection) {
		let result = "";

		if (playerSelection === "rock") {
			if (computerSelection === "rock") {
				result = "Draw!";
			} else if (computerSelection === "paper") {
				result = "You Lose!";
				computerScore++;
			} else {
				result = "You Win!";
				playerScore++;
			}
		} else if (playerSelection === "paper") {
			if (computerSelection === "paper") {
				result = "Draw!";
			} else if (computerSelection === "scissors") {
				result = "You Lose!";
				computerScore++;
			} else {
				result = "You Win!";
				playerScore++;
			}
		} else if (playerSelection === "scissors") {
			if (computerSelection === "scissors") {
				result = "Draw!";
			} else if (computerSelection === "rock") {
				result = "You Lose!";
				computerScore++;
			} else {
				result = "You Win!";
				playerScore++;
			}
		} else {
			result = "Try a valid option";
		}
		return result + " Player: " + playerScore + " Computer: " + computerScore;
	}

	// let playerSelection = prompt("Rock, Paper, or Scissors?", "");
	let playerSelection = "rock";
	playerSelection = playerSelection.toLowerCase();
	let computerSelection = computerPlay();
	console.log(playerSelection);
	console.log(computerSelection);

	console.log(playRound(playerSelection, computerSelection));
}
