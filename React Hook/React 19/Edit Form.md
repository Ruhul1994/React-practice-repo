To **edit data using a form in React 19 and JSON Server**, follow these steps:

---

### ✅ 1. JSON Server Setup

**Install and Run JSON Server:**

```bash
npm install -g json-server
json-server --watch db.json --port 3000
```

**Example `db.json` data:**

```json
{
  "users": [
    {
      "id": 1,
      "name": "Ruhul",
      "email": "ruhul@example.com"
    },
    {
      "id": 2,
      "name": "John",
      "email": "john@example.com"
    }
  ]
}
```

---

### ✅ 2. React 19 Edit Form Code (Functional Component)

#### 🧩 `EditUser.jsx`

```jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams(); // Get ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setFormData(data))
      .catch((err) => console.error("Error loading user:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT", // or PATCH
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert("User updated successfully!");
          navigate("/"); // Redirect after update
        } else {
          throw new Error("Failed to update user");
        }
      })
      .catch((err) => console.error("Update error:", err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <br />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <br />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditUser;
```

---

### ✅ 3. Add Route to `App.jsx` (React Router DOM)

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUser from "./EditUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
```

---

### ✅ 4. Link to Edit Page

In your user list component, link to `/edit/:id`:

```jsx
<Link to={`/edit/${user.id}`}>Edit</Link>
```

---

### 🧠 PUT vs PATCH:

|Method|Behavior|
|---|---|
|`PUT`|Replaces entire resource (all fields must be sent).|
|`PATCH`|Updates only specified fields.|

---

### ✅ Summary

|Step|Action|
|---|---|
|1|Fetch user data using ID from URL.|
|2|Show in form and update with `useState`.|
|3|Submit form with `PUT` or `PATCH`.|
|4|Redirect after success.|

---

Do you want this as a **complete working mini project** with `user list + edit + routing`? I can give it as a single folder structure.

[[Nested Routes]]
