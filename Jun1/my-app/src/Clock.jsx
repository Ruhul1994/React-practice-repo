import {useState, useEffect} from 'react';
import styles from './Clock.module.css'; // Assuming you have a CSS module for styling
const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
    const timer = setInterval(() => {
        const currentTime = new Date().toLocaleTimeString();
        setTime(currentTime);
    }, 1000);
    return () => clearInterval(timer);                                                                     
    }, []);
        
  return (
    <div>
      {        time ? (
        <div className="p-4 border-2 border-gray-300 rounded shadow-md bg-white inline-block mx-5">
          <h1 className="text-2xl font-bold text-center mb-4">Current Time</h1>
          <p className={styles.Clock}>{time}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}                                                                            
    </div>
  )
}

export default Clock
