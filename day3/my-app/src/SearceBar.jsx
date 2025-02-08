import { PropTypes } from 'prop-types';
function SearchBar({ searchTerm, onSearchCar }) {
  return (
    <div>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchCar(event.target.value)}
          placeholder="Search.."
          className="w-fit px-2 border rounded-md focus:outline-1 focus:ring-2 focus:ring-blue-500 shadow field-sizing-content"
        />
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
};

export default SearchBar;
