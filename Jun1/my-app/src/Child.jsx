import { useContext } from 'react';
import UserContext from './contexApi01';

function Child() {
    const { theme, setTheme } = useContext(UserContext);
    const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <div className='p-5 rounded-lg' style={{ backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white",
       transition: "background-color 0.3s, color 0.3s",
       fontSize: 24,
       }}>
        
        <p style={{background:{theme}}}>this is use context component</p>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "black" : "white",
          color: theme === "light" ? "white" : "black",
          padding: "10px 20px",
          borderRadius: "10px",
          cursor: "pointer",
          border: "none",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background-color 0.3s, color 0.3s",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginTop: "10px",
          marginBottom: "10px",
          display: "inline-block",
          textAlign: "center",   
        }}
        className='bg-black rounded-2xl'
      >
        theme
      </button>
      <hr />
    </div>
  </div>
);
}

export default Child



