import React from 'react'

const Placeholder = ({ dispatch, value }) => {
  console.log(
    'in placeholder value is', value, '\n',
    'dispatch is ', dispatch)
  return (
    <p>{ value }</p>
  )
}

export default Placeholder
