import { useState } from 'react';
const Skill = () => {
    const [skills, setSkills] = useState([])
    const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    }else {
      setSkills(skills.filter(skill => skill !== value));
    }
}
  return (
    <div>
      <input type="checkbox" className='p-4 m-1' onChange={handleChange} name="" id="Php" value="php" />
        <label htmlFor="Php" className='p-1'>php</label> <br />
        <input type="checkbox" className='p-4 m-1' onChange={handleChange} name="" id="javaScript" value="javascript" />
        <label htmlFor="javaScript" className='p-1'>JavaScript</label> <br />
        <input type="checkbox" className='p-4 m-1' onChange={handleChange} name="" id="Python" value="python" />
        <label htmlFor="Python" className='p-1'>Python</label> <br />
        <input type="checkbox" className='p-4 m-1' onChange={handleChange} name="" id="Java" value="java" />
        <label htmlFor="Java" className='p-1'>Java</label> <br/>
    </div>
  )
}

export default Skill
