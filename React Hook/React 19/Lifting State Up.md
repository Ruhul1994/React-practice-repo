**Lifting State Up** in React is a pattern where you move state from a child component **up to its nearest common parent**. This is done so that **multiple components can share and update the same state**.

---

### 🔍 What Is “Lifting State Up”?

**Definition**:  
Lifting state up means moving the state from a child component to a parent component, so the parent can manage and pass it down as props to child components that need it.

---

### 📌 Why Is It Used?

1. **To Share Data Between Siblings**  
    If two or more child components need access to the same state, that state should live in their parent.
    
2. **To Keep a Single Source of Truth**  
    Lifting state avoids having duplicate or conflicting states in different components.
    
3. **Better Component Communication**  
    It allows child components to communicate indirectly by updating the parent’s state.
    

---

### 🧠 Example (Child Can't Share Directly)

Let's say you have two components:

- `<InputBox />` — user types something
    
- `<Display />` — shows the typed text
    

They can't share state directly, so we lift the state up to the parent.

```jsx
import { useState } from 'react';

function Parent() {
  const [text, setText] = useState("");

  return (
    <div>
      <InputBox text={text} setText={setText} />
      <Display text={text} />
    </div>
  );
}

function InputBox({ text, setText }) {
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

function Display({ text }) {
  return <p>You typed: {text}</p>;
}
```

---

### 🏁 Summary

|Term|Meaning|
|---|---|
|Lifting state up|Moving state to the closest common ancestor component|
|Why use it?|To share data across components and manage state in one central place|
|Common use case|Syncing form inputs, toggles, list filters, shared values, etc.|

Let me know if you want a visual diagram or a complex use case example!
[[UseRef HOOK]]
[[Controlled Components]]
[[useTransition() Hook]]
[[Component life cycles 🚴]]
