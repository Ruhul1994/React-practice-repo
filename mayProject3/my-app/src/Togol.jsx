import { useState } from "react"
import Pra from "./Pra"

const Togol = () => {
    const [isTogol, setIsTogol] = useState(true)
  return (
    <div>
      {
        isTogol ? <Pra/> : null
      }

      <button className="bg-black text-white m-4 p-2 cursor-pointer rounded" onClick={()=>{setIsTogol(!isTogol)}}>Change togol</button>
    </div>
  )
}

export default Togol
