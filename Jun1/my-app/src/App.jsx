
import { useState } from "react"
import Skill from "./Skill";
import Array from "./Array";
import Radio from "./Radio";
import District from "./District";
import Clock from "./Clock";

const App = () => {
  const [district, setDistrict] = useState("");
  const [gender, setGender] = useState();
  const [skills, setSkills] = useState([]);
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
     <Radio gender={gender} setGender={setGender}/>
     <Skill skills={skills} setSkills={setSkills}/>
      <District setDistrict={setDistrict}/>
      <button
        onClick={() => {
          setSubmitted({ name, age, skills,gender, district });
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
            <p>Your skills are: {submitted.skills.length > 0 ? submitted.skills.join(', ') : 'No skills selected'}</p>
            <p>Your gender is: {submitted.gender || "Not selected"}</p>
            <p>Your district is: {submitted.district || "Not selected"}</p>
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
            setSkills([]);
            setGender("")
            setDistrict("");
          }} className='bg-red-400 text-white p-2 m-4 cursor-pointer rounded'>Clear</button>
        </div>
      )
      }
      <Clock />
      <Array />
      
    </div>
  )
}

export default App
