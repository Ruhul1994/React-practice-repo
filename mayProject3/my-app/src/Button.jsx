import React from 'react'

const Button = ({content,handel}) => {
  return (
    <div>
      <button className='bg-black text-white m-4 p-2 cursor-pointer rounded' onClick={handel}>{content}</button>
    </div>
  )
}

export default Button
