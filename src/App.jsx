import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
import Choices from './components/Choices/Choices'

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
  





  return (
    <div className="App w-full h-[100vh] flex  items-center flex-col">
      <Title 
        score={score}

      />
      <Choices play={play}/>
      <div className="mt-4">
        {userChoice && computerChoice ? (
          <div className=' text-white'>
            <p>You picked: {userChoice}</p>
            <p>The house picked: {computerChoice}</p>
            <p>
              You {choices[userChoice].beats === computerChoice ? 'Win' : 'Lose'}!
            </p>
            
          </div>
        ) : (
          <p className=' text-white'>Make your choice !</p>
        )}
      </div>

    </div>
  )
}

export default App






