import React from 'react'

export default function Title() {
  return (
    <div className=" border-gray-500 border-[2px] mt-8 flex justify-between p-5 w-[40%] rounded-xl">
            <div className=' text-white font-bold flex flex-col justify-center'>
                <h3>ROCK</h3>
                <h3>PAPER</h3>
                <h3>SCISSORS</h3>
            </div>
            <div className='score bg-white text-blue-950 w-[8rem] flex flex-col justify-center items-center rounded-xl p-2 gap-2'>
                <h1>SCORE</h1>
                <p className=' font-bold text-4xl'>0</p>
            </div>
    </div>
  )
}
