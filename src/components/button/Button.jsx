import React from 'react'

export const Button = ({
    title,
    style,
    onClick,

}) => {
  return (
    <button onClick={onClick}  className={`px-4 py-2 rounded-md transition duration-300 shadow-sm cursor-pointer font-medium ${style}`}>{title}</button>
  )
}
