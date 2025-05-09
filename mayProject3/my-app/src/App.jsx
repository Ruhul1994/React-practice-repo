// import React from 'react'
// import { useState } from 'react'


// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl:' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNt9UpcsobJNOGFHPeBt-88iRmqjflBnIjhw&s',
//   imageAlt: 'Picture of Hedy Lamarr',
//   title: 'Actor, Inventor',
// }

// const products = [
//   { id: 1, name: 'product 1', price:100 },
//   { id: 2, name: 'product 2', price:200 },
//   { id: 3, name: 'product 3', price:300 },
//   { id: 4, name: 'product 4', price:400 },
//   { id: 5, name: 'product 5', price:500 },
//   { id: 6, name: 'product 6', price:600 },
//   ]
// const listItems = products.map((product)=>
//   <li key= {product.id}>{product.name},'product price:'{product.price}</li>
// )

// const App = () => {
//   return (
//     <div>
//       <h3>{user.title}</h3>
//       <h1>{user.name}</h1>
//         <img
//         className='h-10 w-10 rounded-full'
//         src={user.imageUrl}
//         alt={user.imageAlt}
//          />
//       <h2>Products</h2>
//       <ul>
//         {listItems}
//       </ul>

//         </div> 
//   )
// }


// const App = () => {
//   //  const [color, setColor] = useState('red')
//   return (
   
//     <div>
//        {/* <h1>my favorite color is {color}</h1>
//        const cl = {color}
//       <button type='button' className='bg-{cl}-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setColor('blue')}>
//         blue
//       </button> */}

//     </div>
//   )
// }

// export default App


/**
 *  1. import useState from react;
 * 2. import the button component
 * 2. create a state variable and a function to update it
 * 3. create a function to handle the click event
 * 4. pass the function to the button as a prop
 */

import React, { useState } from 'react'
import Button from './Button'
import Togol from './Togol'
import Input from './Input'

const App = () => {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('Ruhul')
  const handleClick = () => {
    setCount(count + 1)
  }
  const handleClickMinas = () => {
    setCount(count - 1)
    if (count <= 0) {
      setCount(0)
    }
  }
  const handleInput = ()=>{
    setInputValue("")

  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h1 className='bg-green-300 text-5xl'>Click the button the count is <span className='text-red-400'>{count}</span></h1>
      <Button content='Click me' handel={handleClick} />
      <Button content='Click me' handel={handleClickMinas} />

      <Togol/>
      
      <Input inputValue = {inputValue} handleInputChange={handleInputChange }/>
      <h2>{inputValue}</h2>
      <Button content='clear' handel={handleInput} />


    </div>
  )
}

export default App
