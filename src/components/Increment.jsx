import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../redux/CounterSlice";

const Increment = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(increment())}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md transition duration-300"
    >
      Increment
    </button>
  );
};

export default Increment;
