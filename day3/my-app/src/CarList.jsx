const cars = [   
  { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
  { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
  { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
  { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
  { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
];

function CarList() {
  return (
    <div className="flex flex-row flex-wrap gap-4 mt-2">
      {cars.map((car) => (
        <div key={car.id} className="p-4 rounded shadow box-border w-74">
          <h2 className="text-xl font-bold">{car.title}</h2>
          <p><strong>Brand:</strong> {car.brand}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Price:</strong> ${car.price}</p>
          <p><strong>Premium:</strong> {car.isPremium ? "Yes" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

export default CarList;
