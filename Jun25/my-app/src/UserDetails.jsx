
import { useParams } from 'react-router-dom';
const UserDetails = () => {
  const params = useParams();
  const { id, name } = params;
  return (
    <div>
      <h1>User Details</h1>
      <h2>User ID: {id ? id : 'N/A'}</h2>
      <h2>User name: {name ? name : 'N/A'}</h2>
      
    </div>
  )
}

export default UserDetails
