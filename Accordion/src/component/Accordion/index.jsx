import { useState } from "react";
import "./styles.css"; // Assuming you have a CSS file for styling
import accordionData from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const [enableMultiSelection, setEnableMultiSelection] =useState(false);

  const [multiple, setMultiple] = useState([])

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultipleSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const fiendIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
    if (fiendIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(fiendIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  }

  return (
    <div className="wrapper">
      <button
        style={{
          color: enableMultiSelection ? "red" : "white"
        }}
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        Multiple selection
      </button>
      <div className="accordion">
        {accordionData && accordionData.length > 0 ? (
          accordionData.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={enableMultiSelection ? 
                  () => handleMultipleSelection(item.id) : 
                  () => handleSingleSelection(item.id)}
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection
                  ? (multiple.indexOf(item.id) !== -1 && <div className="content">{item.answer}</div>)
                  : (selected === item.id ? <div className="content">{item.answer}</div> : null)
              }
        
             
            </div>
          ))
        ) : (
          <div>data is not found</div>
        )}
      </div>
    </div>
  );
}
