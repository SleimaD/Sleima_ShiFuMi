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
  </div>

  )
}




