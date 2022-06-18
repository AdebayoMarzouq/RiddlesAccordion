import React from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <h1>Your Dose Of Funny Riddles</h1>
      <div className="faq-container">
        {data.map(data =>
          <SingleQuestion key={data.id} {...data} />
        )}
      </div>
    </main>
  )
}

export default App;
