import React from 'react'

function Student(props) {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h2>class{props.section}</h2>
      <h2>Gender{props.gender}</h2>
    </div>
  )
}

export default Student
