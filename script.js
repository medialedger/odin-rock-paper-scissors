function getComputerChoice() {
	const random =  Math.floor(Math.random() * 3) + 1;
	switch (random) {
		case 1:
			return 'rock';
			break;
		case 2:
			return 'paper';
			break;
		case 3:
			return 'scissors';
			break;
		default:
			break;
	}
}

function playRound(playerSelection, computerSelection) {
	if(playerSelection === computerSelection) {
		return 'Tied! Try again.';
	} else if(playerSelection === 'rock') {
		if(computerSelection === 'paper') {
			return 'You lost! Paper covers rock.';
		} else if(computerSelection === 'scissors') {
			return 'You won! Rock smashes scissors.';
		}
	} else if(playerSelection === 'paper') {
		if(computerSelection === 'rock') {
			return 'You won! Paper covers rock.';
		} else if(computerSelection === 'scissors') {
			return 'You lost! Scissors cut paper.';
		}
	} else if (playerSelection === 'scissors') {
		if(computerSelection === 'rock') {
			return 'You lost! Rock smashes scissors.';
		} else if(computerSelection === 'paper') {
			return 'You won! Scissors cut paper.';
		}
	}
}

function playGame() {
	for (let i = 0; i < 5; i++) {
		let playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
		checkPlayerSelection(playerSelection);
	}
}

function checkPlayerSelection(selection) {
	if (selection === 'rock' || selection === 'paper' || selection === 'scissors') {
		console.log(playRound(selection, getComputerChoice()));
	} else {
		selection = prompt('Try again! Must be either rock, paper or scissors.').toLowerCase();
		checkPlayerSelection(selection);
	}
}

playGame();