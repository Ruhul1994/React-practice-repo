import SearchBar from './SearceBar';
import CheckBox from './checkBox';
import PropTypes from 'prop-types'
function SelectBar({searchTerm,onSearchCar,showPremium, onSelectPeridium}) {
  return (
    <div className='flex items-center space-x-4'>
       <>
        <SearchBar
         searchTerm = {searchTerm} onSearchCar = {onSearchCar}/>
        <CheckBox
         showPremium = {showPremium} onSelectPeridium = {onSelectPeridium}/>
      </>
    </div>
  )
}
SelectBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
  showPremium: PropTypes.bool.isRequired,
  onSelectPeridium: PropTypes.func.isRequired,
}
export default SelectBar
