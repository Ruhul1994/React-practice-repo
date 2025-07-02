
import User from './User'
import { Link } from 'react-router-dom'
import AddUser from './AddUser';

const About = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
      <h1>This is the About page</h1>
      <User />
      <Link to="/addUser" className="text-blue-500 p-4 hover:underline"> AddUser</Link>
    </div>
  )
}

export default About
