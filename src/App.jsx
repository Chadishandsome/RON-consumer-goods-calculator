import { useState } from 'react'
import './App.css'

import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slider minVal={0} maxVal={300}></Slider>
    </>
  )
}

export default App
