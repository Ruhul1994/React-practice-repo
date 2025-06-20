In React, **you pass a function as a prop** when you want a **child component to communicate back to the parent** — usually to trigger some logic or update the state in the parent.

---

### ✅ **Basic Example: Passing a Function as Props**

#### 🧠 Scenario: A parent wants to update its state when a button in the child is clicked.

---

### 🔷 **Parent Component**

```jsx
import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState("Hello from parent");

  const handleClick = () => {
    setMessage("Child clicked the button!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <Child onButtonClick={handleClick} />
    </div>
  );
};

export default Parent;
```

---

### 🔷 **Child Component**

```jsx
const Child = ({ onButtonClick }) => {
  return (
    <button onClick={onButtonClick}>
      Click Me
    </button>
  );
};

export default Child;
```

---

### 💡 Why You Pass Function as Props:

|Reason|Description|
|---|---|
|🟩 To update parent state|Only the parent can update its own state. So child sends a signal (function call).|
|🟩 To reuse logic|Parent can define complex logic and share it with children.|
|🟩 To handle events|Useful for handling form submissions, clicks, etc. from child components.|

---

### 🧪 Real Life Example:

If you have a `TodoList` and `TodoItem`, and clicking a delete button in `TodoItem` should remove the item from the list:

```jsx
// TodoItem.js
const TodoItem = ({ item, onDelete }) => (
  <div>
    {item}
    <button onClick={() => onDelete(item)}>Delete</button>
  </div>
);
```

```jsx
// TodoList.js
const TodoList = () => {
  const [todos, setTodos] = useState(["Learn React", "Read book"]);

  const handleDelete = (itemToDelete) => {
    setTodos(todos.filter(item => item !== itemToDelete));
  };

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo} item={todo} onDelete={handleDelete} />
      ))}
    </div>
  );
};
```

---

If you want, I can show how this works with a `form`, `modal`, or `API call` example. Just ask!


[[Controlled Components]]
[[Pure Component React]]
[[UseEffect()]]
