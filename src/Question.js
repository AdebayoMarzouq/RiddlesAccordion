import React, { useState } from 'react'
import { FaChevronDown, FaTimes } from 'react-icons/fa'

const Question = ({ title, ans, info }) => {
  const [display, setDisplay] = useState(false)

  return (
    <div className={`faq ${display ? 'active' : ''}`}>
      <h3 className='faq-title'>{title}</h3>
      {display && (
        <>
          <p className='faq-text'>{ans}</p>
          <p className='info'>{info}</p>
        </>
      )}
      <button className='faq-toggle' onClick={() => setDisplay(!display)}>
        {display ? <FaTimes className='fa-times' /> : <FaChevronDown />}
      </button>
    </div>
  )
}

export default Question
