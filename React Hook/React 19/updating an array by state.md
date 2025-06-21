In React, updating an **array** or **array of objects** in the `useState` hook requires creating a **new copy** of the array (because React state should be immutable).

Here’s a full breakdown with examples:

---

### ✅ **Update a Simple Array in State**

```jsx
import { useState } from 'react';

function ArrayExample() {
  const [fruits, setFruits] = useState(['apple', 'banana']);

  // Add a new item
  const addFruit = () => {
    setFruits([...fruits, 'orange']);
  };

  // Update an item
  const updateFirstFruit = () => {
    const updated = [...fruits];
    updated[0] = 'mango';
    setFruits(updated);
  };

  // Remove an item
  const removeFruit = () => {
    setFruits(fruits.filter(fruit => fruit !== 'banana'));
  };

  return (
    <div>
      <button onClick={addFruit}>Add</button>
      <button onClick={updateFirstFruit}>Update</button>
      <button onClick={removeFruit}>Remove</button>
      <ul>
        {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}
      </ul>
    </div>
  );
}
```

---

### ✅ **Update an Array of Objects in State**

```jsx
import { useState } from 'react';

function ObjectArrayExample() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ruhul' },
    { id: 2, name: 'John' }
  ]);

  // Add new object
  const addUser = () => {
    setUsers([...users, { id: 3, name: 'Anna' }]);
  };

  // Update an object by ID
  const updateUser = () => {
    const updated = users.map(user =>
      user.id === 2 ? { ...user, name: 'Johnny' } : user
    );
    setUsers(updated);
  };

  // Remove an object by ID
  const removeUser = () => {
    setUsers(users.filter(user => user.id !== 1));
  };

  return (
    <div>
      <button onClick={addUser}>Add</button>
      <button onClick={updateUser}>Update</button>
      <button onClick={removeUser}>Remove</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

### 🧠 Summary:

- Use **spread operator** `...` to create a new array.
    
- For **update**, use `.map()` and `filter()` for **remove**.
    
- For **objects**, use `{ ...obj }` to copy before updating.
    

If you tell me your real use case, I can show the exact code you need.

[[Component life cycles 🚴]]
[[update an object in state]]
