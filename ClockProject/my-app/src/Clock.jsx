import { useState, useEffect } from 'react'

const Clock = ({color,bgColor}) => {
    const [time, setTime] = useState('')
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(interval);
    }, []);
   
  return (
    <div>
      <p
        className={`p-2 text-4xl mx-5 inline-block m-4 rounded`}
        style={{
          backgroundColor: bgColor,
          color: color,
        }}
      >
        {time}
      </p>
    </div>
  );
}

export default Clock
