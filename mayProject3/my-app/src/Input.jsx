
const Input = ({inputValue,handleInputChange }) => {
  return (
    <div>
      <input className="w-64 p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 m-4" type="text" placeholder='Please type' value={inputValue}  onChange={handleInputChange }/>
    </div>
  )
}

export default Input
