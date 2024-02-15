import React, { useState } from 'react'

export default function Result(props) {

    // const resultMessage = 'You Win';
    const [resultMessage,setResultMessage] = useState("");


    // if (props.choices[props.userChoice].beats === props.computerChoice) {
    //     setResultMessage("You win")
    // } else if (props.choices[props.userChoice].beats != props.computerChoice) {
    //     setResultMessage("You lose")
    // } else {
    //     setResultMessage("DRAW")
    // }

  return (
    <div className="result-container mt-[7rem] flex text-white justify-center items-center gap-[10rem]">
        <div className="choice-container flex flex-col justify-normal items-center gap-5">
            <p>You picked</p>
            <div>{props.userChoice}</div> 
        </div>

        <div className="result-message flex flex-col justify-normal items-center gap-5">
            <p>  You {props.choices[props.userChoice].beats === props.computerChoice ? 'Win' : 'Lose'}!</p>
            
            <button className=' bg-white text-black p-2 px-10 rounded-xl' onClick={props.playAgain}>PLAY AGAIN</button>
        </div>

        <div className="choice-container flex flex-col justify-normal items-center gap-5">
            <p>The house picked</p>
            <div>{props.computerChoice}</div> 
        </div>
  </div>

  )
}




