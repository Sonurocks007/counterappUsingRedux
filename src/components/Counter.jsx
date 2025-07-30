import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  setValue,
} from "../redux/slices/CounterSlice";
import { toast } from "react-toastify";
import { Input,Button } from "./index";


const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSetValue = () => {
    const numericValue = Number(input);
    if (input.trim() === "" || isNaN(numericValue)) {
      toast.error("Please enter a valid number");
      return;
    }
    dispatch(setValue(numericValue));
    toast.success(`Value set to ${numericValue}`);
    setInput("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <section className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold mb-10 text-gray-800">
          Counter App
        </h1>
        <p className="text-5xl font-semibold text-gray-700 mb-12">
          Count: {count}
        </p>

        <div className="flex justify-center items-center gap-3 mb-5">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a value"
            style="border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
          <Button
            title="Set Value"
            onClick={handleSetValue}
            style="bg-green-500 hover:bg-green-600 text-white"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button
            title="Increment"
            onClick={() => dispatch(increment())}
            style="bg-blue-500 hover:bg-red-600 text-white"
          />
          <Button
            title="Decrement"
            onClick={() => dispatch(decrement())}
            style="bg-red-500 hover:bg-red-600 text-white"
          />
          <Button
            title="Reset"
            onClick={() => dispatch(reset())}
            style="bg-gray-600 hover:bg-gray-700 text-white"
          />
        </div>
      </section>
    </div>
  );
};

export default Counter;
