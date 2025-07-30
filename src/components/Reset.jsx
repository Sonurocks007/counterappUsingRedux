import React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../slices/CounterSlice";

const Reset = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(reset())}
      className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-md shadow-md transition duration-300"
    >
      Reset
    </button>
  );
};

export default Reset;
