
function District({setDistrict }) {
  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  }
  return (
    <div>
      <select name="" id="" className='border border-gray-300 p-2 m-4 rounded mb-4' defaultValue={""} onChange={handleDistrictChange}>
      <option value="">Select your district</option>
      <option value="Dhaka"> Dhaka</option>
      <option value="Chittagong"> Chittagong</option>
      <option value="Khulna"> Khulna</option>
      <option value="Rajshahi"> Rajshahi</option>
      </select>
    </div>
  )
}

export default District
