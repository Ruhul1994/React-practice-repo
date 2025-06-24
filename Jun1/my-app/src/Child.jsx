import { useContext } from 'react';
import UserContext from './contexApi01';

function Child() {
    const { theme, setTheme } = useContext(UserContext);
  return (
    <div>
      <div className={`bg-${theme}-200 p-5 rounded-lg`}>
        
        <p className='bg-blue-300 text-2xl '>this is use context component</p>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='bg-black rounded-2xl'>Dark theme</button>
        <hr />
      </div>
    </div>
  );
}

export default Child



