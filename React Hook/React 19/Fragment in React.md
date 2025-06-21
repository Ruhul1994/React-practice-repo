In React, **Fragments** are used to **group multiple elements** without adding extra nodes to the DOM.

---

### ✅ Why use `Fragment` in React?

Normally, React components must return a **single parent element**. But sometimes you want to return **multiple elements** **without wrapping them in a `div`**. That’s where `Fragment` comes in.

#### ✅ Problem it solves:

If you return multiple elements without a wrapper, React throws an error:

```js
// ❌ This causes an error
return (
  <h1>Hello</h1>
  <p>World</p>
)
```

You might fix it using a `div`, but that adds extra markup:

```js
// ✅ But adds extra <div> to the DOM
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
)
```

But sometimes, **extra `div`s can break your layout** or create **invalid HTML**, especially in tables or lists.

So instead, use:

```js
import { Fragment } from 'react';

return (
  <Fragment>
    <h1>Hello</h1>
    <p>World</p>
  </Fragment>
)
```

Or shorthand:

```js
<>
  <h1>Hello</h1>
  <p>World</p>
</>
```

---

### 📌 When to use `Fragment`:

- When returning multiple JSX elements **without an extra wrapper**
    
- When you want **clean HTML structure** (no unnecessary tags)
    
- Inside tables (e.g., `<tr>` cannot have a `<div>` inside)
    
- In list rendering to avoid extra parent elements
    

Example (in list):

```js
items.map(item => (
  <React.Fragment key={item.id}>
    <dt>{item.name}</dt>
    <dd>{item.description}</dd>
  </React.Fragment>
))
```

---

### 🚫 When NOT to use `Fragment`:

- When you need to apply **CSS classes or styles** (because Fragment can't accept className or style)
    

```js
// ❌ This will not work
<Fragment className="box">...</Fragment>
```

Use a `div` instead if you need styling or className.

- If you only have **one child**, you don't need Fragment at all.
    

---

### 🔁 Summary:

|Situation|Use Fragment?|
|---|---|
|Grouping elements w/o extra tags|✅ Yes|
|Need to add className/style|❌ No|
|Only one JSX element returned|❌ No|
|Inside a table or list|✅ Yes|

Would you like a visual example or real-world case from your projects?

[[Pure Component React]]
[[forwordRef ()]]