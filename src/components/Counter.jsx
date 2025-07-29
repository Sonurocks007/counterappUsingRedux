import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, setValue } from "../redux/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSetValue = () => {
    // const numericValue = Number(input);
    if (input.trim()===""||isNaN(input)) {
      alert("Value must be number")
    }
    dispatch(setValue(input));
      setInput(""); 
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-300 w-full h-screen">
      <section className="flex flex-col items-center rounded-3xl bg-white w-[400px] h-[500px] p-4">
        <h1 className="mt-4 text-3xl font-bold">Counter App</h1>
        <p className="mt-20 text-3xl">Count: {count}</p>

        <div className="flex flex-row gap-4 mt-20">
          <button
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="cursor-pointer bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>

        <div className="mt-6 flex flex-row items-center gap-2">
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input-no-spinner border rounded p-2 w-32"
            placeholder="Set value"
            
          />
          <button
            className=" cursor-pointer bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleSetValue}
          >
            Set Value
          </button>
        </div>
      </section>
    </div>
  );
};

export default Counter;
