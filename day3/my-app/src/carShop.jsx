import Heading from "./Heading"
import SelectBar from "./selectBar"
import CarList from "./CarList"
function carShop() {
  return (
    <div className="mx-4  p-5 rounded mt-2">
      <>
        <Heading/>
        <SelectBar/>
        <CarList/>
      </>
    </div>
  )
}

export default carShop
