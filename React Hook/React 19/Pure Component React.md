In **React**, a **Pure Component** is a special type of component that automatically avoids unnecessary re-renders by doing a **shallow comparison** of props and state.

---

### 🔍 Basic Explanation

A **Pure Component** only re-renders if its **props** or **state** change. If they stay the same (by shallow comparison), React skips the re-rendering to improve performance.

---

### ✅ Syntax

In class components:

```jsx
import React, { PureComponent } from 'react';

class MyComponent extends PureComponent {
  render() {
    console.log("Rendered");
    return <div>{this.props.name}</div>;
  }
}
```

Instead of:

```jsx
class MyComponent extends React.Component { ... }
```

You use:

```jsx
class MyComponent extends React.PureComponent
```

---

### 🔄 Shallow Comparison Meaning

For objects, arrays, or functions, **shallow comparison** only checks if the reference is different:

```js
{ a: 1 } === { a: 1 } // false (different reference)
```

So:

- If a new object or array is passed (even with the same content), it **will re-render**.
    
- If the exact same reference is passed, it **will not re-render**.
    

---

### ⚙️ In Function Components (React 16.6+)

Use `React.memo()`:

```jsx
const MyComponent = React.memo((props) => {
  return <div>{props.name}</div>;
});
```

---

### 🧠 When to Use PureComponent or React.memo

Use it when:

- Components get the same props often.
    
- You want to optimize performance.
    
- You're working with large lists or nested components.
    

---

### ⚠️ Warning

If your props are complex objects or you mutate state/props directly, `PureComponent` can give **wrong results** (i.e., it may skip rendering when it should update). So always use **immutable updates**.

---

### 🔚 Summary Table

|Feature|`Component`|`PureComponent` / `React.memo`|
|---|---|---|
|Re-render always|✅ Yes|❌ No, if props/state unchanged|
|Comparison type|Manual or default|Shallow comparison automatically|
|Usage|Class & Function|`PureComponent` / `React.memo()`|

---

Would you like a visual example using both types to compare behavior?

[[pass function as a props]]
[[Component life cycles 🚴]]
[[Controlled Components]]
