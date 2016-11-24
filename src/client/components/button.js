import React from 'react'

const Button = ({ label, action }) => {
  console.log(
    'in Button label is', label, '\n',
    'action is ', action)
  return (
    <button onClick={() => action(label)}>
      { label }
    </button>
  )
}

export default Button
