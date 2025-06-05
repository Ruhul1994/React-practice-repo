import Clock from './Clock';
import { useState } from 'react';
const App = () => {
  const [color, setColor] = useState('white')
  const [bgColor, setBgColor] = useState('black')
  const handleChange = (e) => {
    setColor(e.target.value)
  }
  const handleBgChange = (e) => {
    setBgColor(e.target.value)
  }
return (
    <div>
      <h1 className="bg-green-300 inline-block text-2xl border-l text-center mx-4">Show the time</h1>
      <label htmlFor="color" className='bg-red-400 p-5'>choose the text color &gt;</label>
      <select name="color" value={color} id="color" onChange={handleChange} className="mx-4  p-5" style={{backgroundColor: color, color: bgColor}}> 
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="black">black</option>
        <option value="white">white</option>
      </select>

      <label htmlFor="color">choose the background color</label>
      <select name="color" id="color" value={bgColor} onChange={handleBgChange} className="mx-4 bg-amber-500 p-5">
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="black">black</option>
        <option value="white">white</option>
      </select>
      <Clock color= {color} bgColor={bgColor}/>
    </div>
  )
}

export default App
