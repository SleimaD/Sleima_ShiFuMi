import React from 'react'
import Rock from '../../assets/icon-rock.svg'
import Paper from '../../assets/icon-paper.svg'
import Scissors from '../../assets/icon-scissors.svg'
import '../Choices/Choices.css'

export default function (props) {

  return (
    <div className='fightContainer flex flex-col justify-center items-center mt-16 w-[80%] gap-20'>
        <div className='flex items-center justify-between gap-[8rem]'>
        <div className='paper bg-white rounded-[60%] p-8 border-[#576ff5] border-[10px]' onClick={() => props.play('paper')}>
            <img className='w-[3.2rem] h-[3rem] rounded' src={Paper} alt="Paper" />
        </div>
        <div className='scissors bg-white rounded-[50%] p-8 border-[#F2AB26] border-[10px]' onClick={() => props.play('scissors')}>
            <img className='w-[3rem] h-[3rem]' src={Scissors} alt="Scissors" />
        </div>
        </div>
        <div>
        <div className='rock bg-white rounded-[50%] p-8 border-[#df3d5b] border-[10px]' onClick={() => props.play('rock')}>
            <img className='w-[3rem]' src={Rock} alt="Rock" />
        </div>
        </div>
  </div>

  )
}






