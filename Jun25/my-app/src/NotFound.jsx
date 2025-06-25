
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f8f9fa'
    }}>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZSbqdD14vZlG0VW-Srig4gHaE4%26pid%3DApi&f=1&ipt=786ecdf92a1127b82b9dd8c8f970baea6246922611bf56e558060f643967b5bc&ipo=images"
        alt="404"
        width={200}
        style={{ marginBottom: 24 }}
      />
      <h1 style={{ fontSize: '4rem', margin: 0, color:"red" }}>404!</h1>
      <h2 style={{ margin: '8px 0', color: '#495057' }}>Page Not Found</h2>
      <p style={{ color: '#868e96', marginBottom: 24 }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/app"
        style={{
          padding: '10px 24px',
          background: '#007bff',
          color: '#fff',
          borderRadius: 4,
          textDecoration: 'none',
          fontWeight: 500,
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}
      >
        Home page
      </Link>
    </div>
  );
}

export default NotFound
