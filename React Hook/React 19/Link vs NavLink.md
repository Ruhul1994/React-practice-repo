In React Router (v6 and v6.22+ used in React 19), both `<Link>` and `<NavLink>` are used to navigate between routes, but they have **different purposes**.

---

### ✅ Difference Between `<Link>` and `<NavLink>`

|Feature|`<Link>`|`<NavLink>`|
|---|---|---|
|**Purpose**|Basic navigation between routes|Navigation with **active link** styling|
|**Styling**|You style manually|Automatically adds **`active` class** or custom|
|**When to use**|Any link|Navigation bars, menus|
|**Active State?|❌ No active tracking|✅ Automatically tracks active route|

---

### ✅ Syntax of `<Link>`

```jsx
import { Link } from "react-router-dom";

<Link to="/about">About</Link>
```

---

### ✅ Syntax of `<NavLink>` with Default `active` class

```jsx
import { NavLink } from "react-router-dom";

<NavLink to="/about">About</NavLink>
```

If you're on the `/about` page, this link will automatically get an `active` class:

```html
<a href="/about" class="active">About</a>
```

---

### ✅ Customizing the Active Class in `<NavLink>`

You can **add your own class name** using a function inside `className`:

```jsx
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? "my-active-class" : "my-inactive-class"}
>
  About
</NavLink>
```

#### Example with Tailwind CSS:

```jsx
<NavLink
  to="/home"
  className={({ isActive }) =>
    isActive ? "text-blue-500 font-bold" : "text-gray-500"
  }
>
  Home
</NavLink>
```

---

### ✅ Full Example

```jsx
// App.jsx
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

---

### ✅ Summary

|Feature|`<Link>`|`<NavLink>`|
|---|---|---|
|Navigation|✅|✅|
|Auto Active Style|❌|✅ Adds `"active"` or custom class|
|Use case|Regular links|Navigation menus where current page is shown|

---

Would you like a styled working demo (like Tailwind CSS navbar)?

[[Router Optional Segment]]
[[Dynamic Routing]]
[[useParams()]]
[[Nested Routes]]
[[Context API]]
