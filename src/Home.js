import React from 'react'
import Student from './Student'

function Home() {
  return (
    <div>
      <h1>this is home page</h1>
      <Student name="B.Bharat" section="MCA" gender="Male"/>
      <Student name="Mamatha" section="BSC" gender="Female"/>
      <Student name="Deepthi" section="Btech" gender="Female"/>
      <Student name="Tabia" section="MCA" gender="Female"/>
      <Student name="likitha" section="BSC" gender="Female"/>
    </div>
  )
}

export default Home
