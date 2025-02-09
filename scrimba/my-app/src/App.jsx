
import reactLogo from './assets/react.svg'


function App() {
  
let H = "Hour";
const m ="minute";
  return (
    <div className=''>
      <header>
        <img src={reactLogo} alt="React Logo" width={90}/>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Product</li>
          </ul>
        </nav>
      </header>
      <main className='text-[16px]'>
        <h1 className='text-[62px] text-center'>Today Routine</h1>
        <ul >
        <li>React 05 {H}</li>
        <li>javascript 01 {H}</li>
        <li>Python 30 {m}</li>
        <li>English 30 {m}</li>
        <li>Math 30 {m} </li>
        <li>Backend 30 {m}</li>
        <li>Problem Solving 30 {m}</li>
        </ul>
      </main>
      <footer>
      <small>&copy; Ruhul 2025 create it</small>
      </footer>
    </div>
    )
}

export default App
