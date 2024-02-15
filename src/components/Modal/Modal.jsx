import React from 'react'
import Rules from '../../assets/image-rules.svg'

export default function Modal(props) {
  return (
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-10 rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-bold mb-10">RULES</h2>
            <img src={Rules} alt="GameRules" className="mb-4" />
            <button onClick={props.myModal} className="absolute top-3 right-5 text-black text-3xl leading-none hover:text-red-700 focus:outline-none">
              &times;
            </button>
          </div>
        </div>

  )
}
