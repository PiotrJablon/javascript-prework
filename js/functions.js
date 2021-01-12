function playGame(playerInput){

	clearMessages();

	function printMessage(msg){
		let div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages(){
		document.getElementById('messages').innerHTML = '';
	}

	function getMoveName(argMoveId){
	  if(argMoveId == 1){
	    return 'kamień';
	  } else if (argMoveId == 2) {
	  	return 'papier'
	  } else if (argMoveId == 3) {
	  	return 'nożyce'
	  }
	  else {
	    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	    return 'nieznany ruch';
	  }
	}

	function displayResult(argComputerMove, argPlayerMove){
		if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
	}
	else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
			printMessage('Przegrywasz!');
		}
	else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
			printMessage('Remis!');
		}
	else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
			printMessage('Przegrywasz!');
		}
	else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
			printMessage('Ty wygrywasz!');
		}
	else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
			printMessage('Remis!');
		}
	else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
			printMessage('Ty wygrywasz!');
		}
	else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
			printMessage('Przegrywasz!');
		}
	else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
			printMessage('Remis!');
		}
	else{
			printMessage(argPlayerMove);
		}
	}

	clearMessages();

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	let computerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + computerMove);

	let playerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove);

}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});