import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, setValue } from "../redux/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSetValue = () => {
    const numericValue = Number(input);
    if (input.trim() === "" || isNaN(numericValue)) {
      alert("Please enter a valid number");
      return;
    }
    dispatch(setValue(numericValue));
    setInput("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <section className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold mb-10 text-gray-800">Counter App</h1>
        <p className="text-5xl font-semibold text-gray-700 mb-12">Count: {count}</p>

        <div className="flex justify-center items-center gap-3 mb-5">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter value"
            className="input-no-spinner w-32 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          />
          <button
            onClick={handleSetValue}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition duration-300"
          >
            Set Value
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => dispatch(increment())}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md transition duration-300"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md shadow-md transition duration-300"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-md shadow-md transition duration-300"
          >
            Reset
          </button>
        </div>

       
      </section>
    </div>
  );
};

export default Counter;
