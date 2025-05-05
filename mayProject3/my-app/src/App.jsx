import React from 'react'
import { useState } from 'react'


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


const App = () => {
  const [color, setColor] = useState('red')
  return (
   
    <div>
       <h1>my favorite color is {color}</h1>
       const cl = {color}
      <button type='button' className='bg-{cl}-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setColor('blue')}>
        blue
      </button>
    </div>
  )
}

export default App



