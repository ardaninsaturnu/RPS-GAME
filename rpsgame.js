// Rocks Paper and Scissors


/*
1-Get the user’s choice.
2-Get the computer’s choice.
3-Compare the two choices and determine a winner.
4-Start the program and display the results.
*/

const getUserChoice = userInput => {

  userInput = userInput.toLowerCase()

  if (userInput==='rock' || userInput==='paper' || userInput==='scissors') {

    return userInput
  } else {
    return 'you typed wrog value'
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3) ;

  switch (randomNumber) {
    case 0:
      return 'rock'
      break
    case 1 :
      return 'paper'
      break
    case 2:
      return 'scissors'
      break
  }
}

const determineWinner = (userChoice,computerChoice) => {

  if (userChoice===computerChoice) {

    return 'kazanan yok keke'

  };

  if(userChoice==='paper') {
     if (computerChoice==='scissors') {
       return 'computer won hadi yallah '
     } else {
       return 'you won baby'
     }
  }

   if(userChoice==='rock') {
     if (computerChoice==='paper') {
       return 'computer won hadi yallah '
     } else {
       return 'you won baby'
     }
  }
   if(userChoice==='scissors') {
     if (computerChoice==='rock') {
       return 'computer won hadi yallah '
     } else {
       return 'you won baby'
     }
  }

}


const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();

  console.log('you threw:'+ userChoice)
  console.log('the computer threw:'+computerChoice)
  console.log(determineWinner(userChoice,computerChoice))
};

playGame();
