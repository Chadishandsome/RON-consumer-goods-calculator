import React from 'react'
import './Slider.css'

function Slider({name, minVal, maxVal, value, setValue, show}) {

  const handleChange = (e) => {
    const newValue = e.target.value;
    newValue >= minVal && newValue <= maxVal? setValue(newValue) : newValue >= maxVal? setValue(maxVal): setValue(minVal);
  }

  return (
    <div className="slidecontainer">
      <p>{name}</p>
      <input className={show? "slider" : "hidden"} type="range" min={minVal} max={maxVal} value={value} onChange={handleChange}/>
      <input type="text" name="" id="" value={value} onChange={handleChange}/>
    </div>
  )
}

export default Slider