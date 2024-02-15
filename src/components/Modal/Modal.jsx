import React from 'react'
import Rules from '../../assets/image-rules.svg'

export default function Modal(props) {
  return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">RULES</h2>
            <img src={Rules} alt="Game Rules" className="mb-4" />
            <button onClick={props.toggleModal} className="absolute top-4 right-4 text-black text-2xl leading-none hover:text-gray-700 focus:outline-none">
              &times;
            </button>
          </div>
        </div>

  )
}
