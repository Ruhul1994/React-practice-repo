import { useState } from 'react'

const Check = () => {
    const [checked, setChecked] = useState([])

    const handleChange = (e) => {
        const { value, checked: isChecked } = e.target;
        if (isChecked) {
            setChecked([...checked, value]);
        } else {
            setChecked(checked.filter((item) => item !== value));
        }
    }
  return (
    <div className='m-4'>
      <input type="checkbox" id='php' value="php" onChange={handleChange} />
        <label htmlFor="php">PHP</label> <br />
      <input type="checkbox" id='js' value="js" onChange={handleChange} />
        <label htmlFor="js">JavaScript</label> <br />
      <input type="checkbox" id='python' value="python" onChange={handleChange}/>
        <label htmlFor="python">Python</label> <br />
      <input type="checkbox" id='java' value="java" onChange={handleChange}/>                      
        <label htmlFor="java">Java</label> <br />

        <p>{checked.toString()}</p>
      
    </div>
  )
}

export default Check
