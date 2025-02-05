import { PropTypes } from 'prop-types';

function CarRow({car}) {
  return (
        <div className="flex flex-row flex-wrap gap-4 mt-2 w-full">
            <div key={car.id} className="p-4 rounded shadow box-border  flex flex-col w-full">
              <h2 className="text-xl font-bold">{car.title}</h2>
              <p><strong>Brand:</strong> {car.brand}</p>
              <p><strong>Year:</strong> {car.year}</p>
              <p><strong>Price:</strong> ${car.price}</p>
              <p><strong>Premium:</strong> {car.isPremium ? "Yes" : "No"}</p>
            </div>
       </div>
  )
}
CarRow.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    car: PropTypes.array.isRequired,
  };
export default CarRow
