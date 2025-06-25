Sure Ruhul! Let's learn **how to make dynamic routes** in **React Router (React 19)** and how to use the `useParams` hook to access the dynamic values (like an ID or slug) from the URL.

---

## ✅ What is Dynamic Routing?

Dynamic routes let you create pages like:

```
/users/123
/users/456
/products/phone
/products/laptop
```

Here, `123`, `456`, `phone`, and `laptop` are **dynamic values** — not hard-coded.

---

## 🔧 Step-by-step Setup

### 🗂 Project Structure

```
src/
├── main.jsx
├── App.jsx
├── pages/
│   ├── Home.jsx
│   ├── User.jsx
│   └── UserDetails.jsx
```

---

## 📦 1. Install React Router (if not done)

```bash
npm install react-router-dom
```

---

## 📁 `main.jsx`

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

---

## 🧠 2. Define Routes in `App.jsx`

```jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<User />} />
      <Route path="/users/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default App;
```

---

## 🏠 `pages/Home.jsx`

```jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/users">Go to Users</Link>
    </div>
  );
};

export default Home;
```

---

## 👤 `pages/User.jsx`

```jsx
import { Link } from "react-router-dom";

const User = () => {
  const users = [
    { id: 1, name: "Ruhul" },
    { id: 2, name: "Karim" },
  ];

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>View {user.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default User;
```

---

## 📄 `pages/UserDetails.jsx`

```jsx
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>User Details Page</h2>
      <p>Dynamic ID from URL: {id}</p>
    </div>
  );
};

export default UserDetails;
```

---

## 🎓 Summary

|Feature|What it does|
|---|---|
|`/users/:id`|Defines a dynamic route with `:id` as a parameter|
|`useParams()`|Reads that dynamic `id` from the URL|

---

## ✅ Real-life Use Case Example:

- `/products/keyboard` → show keyboard info
    
- `/blog/why-react-is-awesome` → show blog post with that slug
    
- `/profile/ruhul123` → show Ruhul's profile page
    

---

Would you like to see a **dynamic product page** next with a **fake data filter**? Or do you want to use `useEffect` to fetch real data using the param?

https://www.youtube.com/watch?v=LuNPCSNr-nE&t=36068s

[[useParams()]]
[[useTransition() Hook]]
