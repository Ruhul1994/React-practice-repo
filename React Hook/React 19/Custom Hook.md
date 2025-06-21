Absolutely, Ruhul! Let’s learn how to make a **custom hook** in React — like a **child-level explanation**, with a **very easy example** and then a **real-life example**.

---

## 🔹 What is a Custom Hook?

👉 A **custom hook** is just a **normal JavaScript function** that starts with `use` and **reuses logic** built using other hooks like `useState`, `useEffect`, etc.

You create it when:

- You want to **reuse stateful logic**
    
- Your code is getting **too long or repeated**
    

---

## 🧒 Like a Child: Easy Example

Let’s make a **custom hook to count clicks**.

### ✅ Step 1: Make a custom hook

```jsx
// useCounter.js
import { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return { count, increase, decrease, reset };
}

export default useCounter;
```

📌 **Remember**:

- It starts with `use`
    
- It uses `useState`
    
- Returns value + actions
    

---

### ✅ Step 2: Use it in a component

```jsx
// CounterComponent.js
import React from 'react';
import useCounter from './useCounter';

function CounterComponent() {
  const { count, increase, decrease, reset } = useCounter();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increase}>➕ Increase</button>
      <button onClick={decrease}>➖ Decrease</button>
      <button onClick={reset}>🔄 Reset</button>
    </div>
  );
}

export default CounterComponent;
```

🧠 Now you can use this `useCounter` in **any component**!

---

## 🏡 Real-life Example: Track Online/Offline Status

Let’s make a custom hook called `useOnlineStatus`.

### ✅ Custom Hook: useOnlineStatus

```jsx
// useOnlineStatus.js
import { useState, useEffect } from 'react';

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;
```

---

### ✅ Use it in any component

```jsx
import React from 'react';
import useOnlineStatus from './useOnlineStatus';

function OnlineStatusIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h2>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</h2>
    </div>
  );
}

export default OnlineStatusIndicator;
```

---

## ✅ Rules of Custom Hooks:

1. Name must start with `use`
    
2. Can only use other hooks inside it (like `useState`, `useEffect`)
    
3. Only call hooks at the **top level** (not inside loops or if blocks)
    
4. It’s just **reusable logic**, not UI
    

---

## ✅ When Not to Use:

❌ If your logic is used only **once**  
❌ If it doesn't involve **state or effects**

---

If you want, I can help you create a **custom hook based on your current project** — just tell me what you need it for!

Would you like that?

[[useId Hook]]
[[UseRef HOOK]]
[[Hooks needed]]
