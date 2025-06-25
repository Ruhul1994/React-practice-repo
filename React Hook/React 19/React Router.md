To use routing in **React 19**, you typically use **React Router v6.22+**, which is the most updated and commonly used routing library.

Here’s a **complete guide** on how to use **React Router (latest version)** with React 19:

---

### 🧠 1. **Install React Router**

```bash
npm install react-router-dom
```

---

### 🧱 2. **Project Structure Example**

```
src/
├── App.jsx
├── main.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── NotFound.jsx
```

---

### ⚙️ 3. **Set Up Router in `main.jsx`**

```jsx
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

### 🧭 4. **Define Routes in `App.jsx`**

```jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
```

---

### 📄 5. **Example Page Components**

#### `Home.jsx`

```jsx
const Home = () => <h1>Welcome to the Home Page</h1>;
export default Home;
```

#### `About.jsx`

```jsx
const About = () => <h1>About Us</h1>;
export default About;
```

#### `NotFound.jsx`

```jsx
const NotFound = () => <h1>404 - Page Not Found</h1>;
export default NotFound;
```

---

### 🔗 6. **Navigation Links (`Link`)**

Use `<Link>` or `<NavLink>` for navigation instead of `<a>`.

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
  );
}
```

---

### 💡 New/Advanced Features in React Router 6.22+:

- **`useNavigate()`**: Programmatic navigation.
    
- **`useParams()`**: Get route parameters.
    
- **`Nested Routes`**: Layout and child components.
    
- **`useLocation()`**: Current route info.
    
- **`<Outlet />`**: Render nested routes inside a parent route.
    

---

### ⚠️ Tips

- Always wrap `<App />` with `<BrowserRouter>` **only once** at the root.
    
- Use `element={<Component />}` inside `<Route>`, not `component={}` (this was used in v5).
    
- React Router v6 is strictly declarative.
    

---

Would you like a version with **nested routes**, or an example with **dynamic routes (`:id`)**?

[[Context API]]
[[useId Hook]
