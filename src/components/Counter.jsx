import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, setValue } from "../redux/CounterSlice";
import { toast } from "react-toastify";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Reset from "./Reset";
import SetValue from "./SetValue";


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
        <h1 className="text-4xl font-extrabold mb-10 text-gray-800">Counter App</h1>
        <p className="text-5xl font-semibold text-gray-700 mb-12">Count: {count}</p>

       <SetValue/>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Increment/>
          <Decrement/>
          <Reset/>
        </div>

       
      </section>
    </div>
  );
};

export default Counter;
