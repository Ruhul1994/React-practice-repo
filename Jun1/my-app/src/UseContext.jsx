import { useContext } from 'react';
import UserContext from './contexApi01';

const UseContext = () => {
  const [theme, setTheme] = useContext(UserContext);
  return (
    <div className={`bg-${theme}-200 p-5 rounded-lg`}>
      <h1 className='text-3xl text-center font-bold'>Use-Context</h1>
      <p className='bg-blue-300 text-2xl '>this is use context component</p>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='bg-black rounded-2xl'>Dark theme</button>
      <hr />
    </div>
  )
}

export default UseContext
