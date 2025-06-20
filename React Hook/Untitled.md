In React, to update an object in state correctly, you **must not mutate** the original state directly. Instead, you **create a new object** with the updated properties using the **spread operator (`...`)** or similar methods.

---

### ✅ Basic Example (Updating one property)

```jsx
import { useState } from 'react';

function Profile() {
  const [user, setUser] = useState({
    name: 'Ruhul',
    age: 25,
    country: 'Bangladesh',
  });

  const updateName = () => {
    setUser(prevUser => ({
      ...prevUser,
      name: 'Updated Ruhul',
    }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Country: {user.country}</p>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}
```

---

### 💡 Explanation

```js
setUser(prevUser => ({
  ...prevUser,       // copy all old properties
  name: 'Updated Ruhul',  // override only the "name" field
}));
```

---

### ✅ Update Nested Object

```js
const [user, setUser] = useState({
  name: 'Ruhul',
  address: {
    city: 'Dhaka',
    zip: '1205',
  },
});

const updateCity = () => {
  setUser(prevUser => ({
    ...prevUser,
    address: {
      ...prevUser.address,
      city: 'Chittagong',
    },
  }));
};
```

---

### ❌ Don't Do This

```js
user.name = 'New Name'; // ❌ Do not mutate state directly
setUser(user);          // ❌ This causes bugs and won't re-render
```

---

Would you like a version where you're updating a **list of objects** (like an array of users), too?