
import { useState } from "react"
import Skill from "./Skill";

const App = () => {
  const [display, setDisplay] = useState(true);
  const [name, setName] = useState("Ruhul");
  const [age, setAge] = useState("1");
  const [submitted, setSubmitted] = useState(null);
  return (
    <div>
      {display? <h1 className='text-2xl bg-blue-500'>Hello world</h1>:null}
      <button onClick={() => setDisplay(!display)} className='bg-black text-white p-2 m-4 cursor-pointer rounded'>
        Toggle Display
      </button>
      <br />
     <input type="text" value={name} name="name" id="age" 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 
        className="border border-gray-300 p-2  rounded mb-4"
     />
     <input type="number" value={age} name="age" id="age"
     
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
        className="border border-gray-300 p-2 m-4 rounded mb-4"
     />
     <Skill />
      <button
        onClick={() => {
          setSubmitted({ name, age });
        }}
        className='bg-blue-500 text-white p-2 m-4 cursor-pointer rounded'
        style={{ display: name && age ? 'block' : 'none' }}
      >
        submit
      </button>
      {submitted && (
        <div>
          <p>Your name is: {submitted.name}</p>
          <p>Your age is: {submitted.age}</p>
        </div>
      )} 
      {
      submitted && 
      (
        <div>
          <p className='text-green-500'>Form submitted successfully!</p>
          <button onClick={()=>{
            setSubmitted(null);
            setName("");
            setAge("");
          }} className='bg-red-400 text-white p-2 m-4 cursor-pointer rounded'>Clear</button>
        </div>
      )
      }
    </div>
  )
}

export default App
