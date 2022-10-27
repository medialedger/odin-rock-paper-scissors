const resultsBox = document.querySelector('.results');
const choiceButtons = document.querySelectorAll('.btn-box button');
choiceButtons.forEach(btn => {
	btn.addEventListener('click',playRound);
})
const newButton = document.querySelector('.new-game');
const scores = document.querySelectorAll('.score');
const roundNum = document.querySelector('.round-num');

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

function getRoundResults(playerSelection, computerSelection) {
	if(playerSelection === computerSelection) {
		sessionStorage.setItem('tie', parseInt(sessionStorage.getItem('tie')) + 1);
		return 'Tied! Try again.';
	} else if(playerSelection === 'rock') {
		if(computerSelection === 'paper') {
			sessionStorage.setItem('lose', parseInt(sessionStorage.getItem('lose')) + 1);
			return 'You lost! Paper covers rock.';
		} else if(computerSelection === 'scissors') {
			sessionStorage.setItem('win', parseInt(sessionStorage.getItem('win')) + 1);
			return 'You won! Rock smashes scissors.';
		}
	} else if(playerSelection === 'paper') {
		if(computerSelection === 'rock') {
			sessionStorage.setItem('win', parseInt(sessionStorage.getItem('win')) + 1);
			return 'You won! Paper covers rock.';
		} else if(computerSelection === 'scissors') {
			sessionStorage.setItem('lose', parseInt(sessionStorage.getItem('lose')) + 1);
			return 'You lost! Scissors cut paper.';
		}
	} else if (playerSelection === 'scissors') {
		if(computerSelection === 'rock') {
			sessionStorage.setItem('lose', parseInt(sessionStorage.getItem('lose')) + 1);
			return 'You lost! Rock smashes scissors.';
		} else if(computerSelection === 'paper') {
			sessionStorage.setItem('win', parseInt(sessionStorage.getItem('win')) + 1);
			return 'You won! Scissors cut paper.';
		}
	}
}

function updateScore() {
	scores.forEach(score => {
		score.textContent = sessionStorage.getItem(score.dataset.score);
	})
}

function newRound() {
	sessionStorage.setItem('round',parseInt(sessionStorage.getItem('round')) + 1);
	roundNum.textContent = sessionStorage.getItem('round');
}

function playRound() {
	let results = getRoundResults(this.dataset.choice, getComputerChoice());
	resultsBox.insertAdjacentHTML('beforeend',`<li><span class="round">Round ${sessionStorage.getItem('round')}:</span> ${results}</li>`);
	updateScore();
	newRound();
	if(newButton.hidden === true){
		newButton.hidden = false;
	}
}

function newGame() {
	sessionStorage.setItem('win', 0);
	sessionStorage.setItem('lose', 0);
	sessionStorage.setItem('tie', 0);
	sessionStorage.setItem('round', 1);
	const resultsBox = document.querySelector('.results');
	resultsBox.innerHTML = '';
	newButton.hidden = true;
	updateScore();
	roundNum.textContent = sessionStorage.getItem('round');
}
newButton.addEventListener('click',newGame);

newGame();
