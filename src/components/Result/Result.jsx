import React, { useState } from 'react'
import Rock from '../../assets/icon-rock.svg'
import Paper from '../../assets/icon-paper.svg'
import Scissors from '../../assets/icon-scissors.svg'
import './Result.css'


export default function Result(props) {

    let choixImages = {
        rock: Rock,
        paper: Paper,
        scissors: Scissors
    };

    let borderColors = {
        rock: 'border-[#df3d5b]',
        paper:'border-[#576ff5]',
        scissors:'border-[#F2AB26]',
    }
    

    let userChoixImage = choixImages[props.userChoice];
    let computerChoixImage = choixImages[props.computerChoice];
  
    


  return (
    <div className="result-container mt-[7rem] flex text-white justify-center items-center gap-[10rem]">
        <div className="choice-container flex flex-col justify-normal items-center gap-9">
            <p className=' uppercase font-bold'>You picked</p>
            <div className={`bg-white rounded-[60%] p-8  border-[10px] ${borderColors[props.userChoice]}`}>           
                 {userChoixImage && <img className='w-[3.5rem] h-[3rem]  ' src={userChoixImage} alt={props.userChoice} />}
            </div> 
        </div>

        <div className="result-message flex flex-col justify-normal items-center gap-5">
            <p>  {props.choices[props.userChoice].beats === props.computerChoice ? 'You Win' : (props.choices[props.userChoice].beats === props.computerChoice ?  ' You Lose' : 'DRAW')}</p>
            
            <button className='play bg-white text-black p-2 px-10 rounded-xl  border-white border-[2px] hover:bg-gray-200 ' onClick={props.playAgain}>PLAY AGAIN</button>
        </div>

        <div className="choice-container flex flex-col justify-normal items-center gap-9">
            <p className=' uppercase font-bold'>The house picked</p>
            <div className={`bg-white rounded-[60%] p-8  border-[10px] ${borderColors[props.computerChoice]}`}>
                {computerChoixImage && <img className='w-[3.5rem] h-[3rem]' src={computerChoixImage} alt={props.computerChoice} />}
            </div> 
        </div>
  </div>

  )
}






