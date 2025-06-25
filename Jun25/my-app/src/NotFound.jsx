
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/app">Home page</Link>
      <br />
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZSbqdD14vZlG0VW-Srig4gHaE4%26pid%3DApi&f=1&ipt=786ecdf92a1127b82b9dd8c8f970baea6246922611bf56e558060f643967b5bc&ipo=images" alt="this is 404 image" width={40} />
    </div>
  )
}

export default NotFound
