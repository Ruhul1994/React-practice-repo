In React, **"derived state"** refers to a state value that is **calculated based on props or other state values**, instead of being stored independently in the component's state.

---

### 🔍 Why it's called "derived"

Because it is **not directly set** by the user—it is **"derived" (calculated)** from another source like:

- Props passed into the component
    
- Other state variables
    
- Context values
    

---

### ✅ Example of Derived State (from props)

```jsx
function Greeting({ name }) {
  const [message, setMessage] = useState(`Hello, ${name}`);

  useEffect(() => {
    setMessage(`Hello, ${name}`);
  }, [name]);

  return <h1>{message}</h1>;
}
```

Here:

- `message` is **derived from `name`**.
    
- We use `useEffect` to keep `message` updated when `name` changes.
    

> ⚠️ **Bad practice**: This adds unnecessary complexity. It’s better to compute the value directly in render.

---

### ✅ Better way: Compute directly (no need for derived state)

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

---

### 💡 When do we use derived state?

You should use derived state **only if**:

- You need to **perform a complex calculation** once.
    
- You want to **avoid recalculating** something heavy on every render.
    
- You need to **cache or temporarily store** a derived value.
    

---

### ❌ Avoid This Pattern

```jsx
const [fullName, setFullName] = useState(`${firstName} ${lastName}`);
```

This will get out of sync when `firstName` or `lastName` changes. Instead:

```jsx
const fullName = `${firstName} ${lastName}`;
```

---

### 🧠 Summary

|Derived State|Description|
|---|---|
|Definition|A state that is computed from props or other state|
|Use Case|When the computation is expensive or needs caching|
|Best Practice|Prefer computing in render over using state|
|Common Mistake|Syncing state manually when it can be derived easily|

---
https://legacy.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

Want a real-world use case or code demo with derived state?
[[Controlled Components]]
[[Component life cycles 🚴]]
