import React from 'react'
import './Slider.css'
import { useState } from 'react'

function Slider({minVal, maxVal}) {

  const [value, setValue] = useState(50)

  const handleChange = (e) => {
    const newValue = e.target.value;
    newValue >= minVal && newValue <= maxVal? setValue(newValue) : newValue >= maxVal? setValue(maxVal): setValue(minVal);
  }

  return (
    <div className="slidecontainer">
      <input className="slider" type="range" min={minVal} max={maxVal} value={value} step={1} onChange={handleChange}/>
      <input type="text" name="" id="" value={value} onChange={handleChange}/>
      <h2>{value}</h2>
    </div>
  )
}

export default Slider