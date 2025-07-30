import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from '../slices/CounterSlice';


const Decrement = () => {
    const dispatch = useDispatch();
    return (
    <button 
    onClick={()=>dispatch(decrement())}
    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md shadow-md transition duration-300">
    Decrement
    </button>
  )
}

export default Decrement