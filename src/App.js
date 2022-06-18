import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
  const [riddles, setRiddles] = useState(data)

  return (
    <main>
      <h1>Your Dose Of Funny Riddles</h1>
      <div className='faq-container'>
        {riddles.map((data) => (
          <SingleQuestion key={data.id} {...data} />
        ))}
      </div>
    </main>
  )
}

export default App
