import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../redux/CounterSlice";
import { toast } from "react-toastify";

const SetValue = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

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
  );
};

export default SetValue;
