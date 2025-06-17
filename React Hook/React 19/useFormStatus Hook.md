In React 19, the `useFormStatus` hook is part of the **React Server Actions** and **Form Actions** feature introduced for better **form handling with progressive enhancement** — especially useful in **React Server Components (RSC)**. It helps track the **status of a form submission**, like:

- Whether the form is currently submitting (`pending`)
    
- If an error occurred
    
- If submission was successful
    

---

### ✅ Why `useFormStatus` is used

It helps you:

- Show a **loading spinner** while submitting.
    
- **Disable buttons** to prevent double submissions.
    
- **Display error or success messages** after submission.
    

It’s especially powerful when using **`<form action={yourAction}`** and **Server Actions**.

---

### 📌 Syntax Rules

```jsx
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}
```

👉 This hook must be used **inside a component rendered within a `<form>` that uses a Server Action.**

---

### 🧠 When to use in real-life projects

You use it when:

- You have a form that submits data using **Server Actions** (introduced in React 18.3+ / React 19).
    
- You want **faster and more secure form handling** without client JS bundling.
    
- You want **progressive enhancement**: works with/without JS.
    

---

### 🛠 Real Example

```jsx
// app/actions.js
'use server';

export async function saveContact(formData) {
  // Save to DB, send email, etc.
  const name = formData.get('name');
  await db.contacts.insert({ name });
}
```

```jsx
// app/page.jsx
import { saveContact } from './actions';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Saving...' : 'Save'}
    </button>
  );
}

export default function ContactForm() {
  return (
    <form action={saveContact}>
      <input name="name" required />
      <SubmitButton />
    </form>
  );
}
```

---

### 🧪 Summary

|Feature|Purpose|
|---|---|
|`useFormStatus()`|Track if form is submitting or errored|
|Best used with|`<form action={serverAction}>`|
|Common use cases|Disable buttons, show loading, show errors|
|React version|React 18.3+ / 19 (with Server Components)|

[[Hooks needed]]
[[UseRef HOOK]]
[[UseEffect()]]
[[Component life cycles 🚴]]
[[forwordRef ()]]
