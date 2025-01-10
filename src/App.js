import React, { useState } from 'react'
import { data } from './data'

export default function App() {
  const [index, setIndex] = useState(0);
  const [option, setOption] = useState('');
  const handleNext = () => {
    setIndex(index + 1);
  }
  const handleSelect = (optn) => {
    setOption(optn);
  }
  return (
    <div className='quiz'>
      <h1>{data[index].Question}</h1>
      <ul>
        <li
          onClick={() => handleSelect('Option1')}>{data[index].Option1}</li>
        <li
          onClick={() => handleSelect('Option2')}>{data[index].Option2}</li>
        <li
          onClick={() => handleSelect('Option3')}>{data[index].Option3}</li>
        <li
          onClick={() => handleSelect('Option4')}>{data[index].Option4}</li>
      </ul>
      <button onClick={handleNext}>Next</button>
      <h5>Question {index + 1} of {data.length}</h5>
    </div>
  )
}
