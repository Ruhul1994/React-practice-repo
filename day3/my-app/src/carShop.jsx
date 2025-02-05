import Heading from "./Heading"
import SelectBar from "./selectBar"
import CarList from "./CarList"
import { useState } from "react"
function CarShop() {
  const cars = [   
    { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
    { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
    { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
    { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
    { id: 6, title: "Luxury SUV2", brand: "BMW2", year: 2023, price: 900000, isPremium: false },
    { id: 7, title: "Luxury SUV4", brand: "BMW", year: 2025, price: 190000, isPremium: true },
    { id: 8, title: "Luxury SUV5", brand: "BMW", year: 2025, price: 290000, isPremium: true },
    { id: 9, title: "Family SUV6", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 10, title: "Family SUV7", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 11, title: "Sports Car8", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
  ];
  const [showPremium, setShowPremium] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const CheckPremiumCar = () =>{
    return showPremium ? cars.filter(car => car.isPremium) : cars;
};

  return (
    <div className="mx-4  p-5 rounded mt-2">
      <>
        <Heading/>
        <SelectBar 
        searchTerm = {searchTerm} 
        onSearchCar = {setSearchTerm} 
        showPremium ={showPremium}
        onSelectPeridium ={setShowPremium}
        />
        <CarList 
        searchTerm = {searchTerm}
        cars = {CheckPremiumCar()}/>
      </>
    </div>
  )
}

export default CarShop
