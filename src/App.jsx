import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
import Choices from './components/Choices/Choices'
import Result from './components/Result/Result'

function App() {
  
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState(0);

  const choices = {
    rock: { beats: 'scissors' },
    paper: { beats: 'rock' },
    scissors: { beats: 'paper' },
  };


  let play = (userChoice) => {

    let computerChoice = Object.keys(choices)[Math.floor(Math.random() * Object.keys(choices).length)];

    setUserChoice(userChoice);
    setComputerChoice(computerChoice);
    setScore( score + (choices[userChoice].beats === computerChoice ? 1 : 0) );
  };
  

  let playAgain = () => {
    
  }



  return (
    <div className="App w-full h-[100vh] flex  items-center flex-col">
      <Title 
        score={score}
      />
      {/* <Choices 
        play={play}
      /> */}
 
      {userChoice && computerChoice ? 
        <Result userChoice={userChoice} computerChoice={computerChoice} choices={choices} playAgain={playAgain()}/> : 
        <Choices play={play}/> }

    </div>
  )
}

export default App






