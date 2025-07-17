// import{ useState } from 'react';
// import './Accordion.css'; // Assuming you have a CSS file for styling
import accordionData from './data';

export default function Accordion() {
    // const [selected, setSelected] = useState(null);
  return (
    <div className="wrapper">
    <div className="accordion">
        {accordionData && accordionData.length > 0 &&
        accordionData.map((item) => (
          <div className='title' key={item.id}>
            <h3>{item.question}</h3>
            <span>+</span>
          </div>
        ))}
    </div>
    </div>
  )
}
