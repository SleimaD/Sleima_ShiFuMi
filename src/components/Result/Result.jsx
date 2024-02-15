import React, { useState } from 'react'
import Rock from '../../assets/icon-rock.svg'
import Paper from '../../assets/icon-paper.svg'
import Scissors from '../../assets/icon-scissors.svg'


export default function Result(props) {

    let resultMessage;
    if (props.userChoice && props.computerChoice) {
      let userWins = props.choices[props.userChoice].beats === props.computerChoice;
      let computerWins = props.choices[props.computerChoice].beats === props.userChoice;
      if (userWins) {
        resultMessage = 'You Win!';
      } else if (computerWins) {
        resultMessage = 'You Lose!';
      } else {
        resultMessage = 'Draw';
      }
    }

    let choixImages = {
        rock: Rock,
        paper: Paper,
        scissors: Scissors
    };
    

    let userChoixImage = choixImages[props.userChoice];
    let computerChoixImage = choixImages[props.computerChoice];
  
    


  return (
    <div className="result-container mt-[7rem] flex text-white justify-center items-center gap-[10rem]">
        <div className="choice-container flex flex-col justify-normal items-center gap-5">
            <p>You picked</p>
            <div className='bg-white rounded-[60%] p-8  border-[10px]'>           
                 {userChoixImage && <img className='w-[3.5rem]  ' src={userChoixImage} alt={props.userChoice} />}
            </div> 
        </div>

        <div className="result-message flex flex-col justify-normal items-center gap-5">
            {/* <p>  You {props.choices[props.userChoice].beats === props.computerChoice ? 'Win' : 'Lose'}!</p> */}
            <p>{resultMessage}</p>
            
            <button className=' bg-white text-black p-2 px-10 rounded-xl' onClick={props.playAgain}>PLAY AGAIN</button>
        </div>

        <div className="choice-container flex flex-col justify-normal items-center gap-5">
            <p>The house picked</p>
            <div className='bg-white rounded-[60%] p-8  border-[10px]'>
                {computerChoixImage && <img className='w-[3.5rem] ' src={computerChoixImage} alt={props.computerChoice} />}
            </div> 
        </div>
  </div>

  )
}






