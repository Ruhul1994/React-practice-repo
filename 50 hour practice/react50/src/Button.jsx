import { useState } from "react";


function Button() {
    const [Count, setCount] = useState(0);
    function handlerClick(){
        setCount(Count+1);
    }
  return (
    <div>
    <p>The Number Count: {Count}</p>
 <button onClick={handlerClick} className="button pl-4 font-medium md:p-6 bg-amber-800 text-white rounded-4xl text-9xl m-12 cursor-pointer">+</button>
    </div>
  )
}

export default Button






