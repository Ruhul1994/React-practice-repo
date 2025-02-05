import SearchBar from './SearceBar';
import CheckBox from './checkBox';
function selectBar() {
  return (
    <div className='flex items-center space-x-4'>
       <>
        <SearchBar/>
        <CheckBox/>
      </>
    </div>
  )
}

export default selectBar
