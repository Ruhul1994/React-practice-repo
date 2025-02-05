
import { PropTypes } from 'prop-types';

function Search({searchTerm, onSearchBook}) {
  return (
    <div>
      <form>
      <input type="text"
      value={searchTerm}
      onChange={(event) => onSearchBook (event.target.value) } 
      placeholder="search book ..." className="mb-4 border rounded-lg pl-2 w-full" />
      </form>
    </div>
  )
}
Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchBook: PropTypes.func.isRequired,
}
export default Search
