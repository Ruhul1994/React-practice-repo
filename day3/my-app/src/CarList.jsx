import CarRow from './CarRow';
import PropTypes from 'prop-types';

function CarList({ searchTerm, cars }) {
  const filteredCars = cars.reduce((acc, car) => {
    if (car.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      acc.push(<CarRow key={car.id} car={car} />);
    }
    return acc;
  }, []);

  return <div className="space-y-4">{filteredCars}</div>;
}

CarList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired,
};

export default CarList;
