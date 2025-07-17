 In React 19, the new `useActionState` hook is introduced to simplify **handling form submissions** and **server actions** with better support for async logic and error handling.

---

## 🧠 What is `useActionState`?

`useActionState` is a **React Server Action** hook used to manage the state of a server action (usually for forms). It:

- Tracks the status of a server action (`pending`, `success`, or `error`)
    
- Automatically resets or updates the state after action completes
    
- Replaces the need for manual `useState`, `useReducer`, and `isLoading` patterns in form handling
    

---

## 🧩 When to Use It?

Use `useActionState` when:

- You're submitting a form and calling a server function (server action)
    
- You want to manage async status (loading, success, error) in a clean way
    
- You want to avoid cluttering your component with multiple hooks for form states
    

---

## 🛠️ What Problems It Solves

|Problem|How `useActionState` Solves It|
|---|---|
|Need to manage loading state|Built-in loading management|
|Handling form submission response|Automatically passes action result|
|Handling errors in async functions|Integrated error handling|
|Manual state and event handling|`useActionState` gives cleaner code|

---

## ✅ Is it the Best Way?

Yes, **for Server Actions in React 19**, it's currently the **best built-in solution**. It simplifies logic that previously needed:

- `useState` for loading
    
- `try/catch` for error
    
- `onSubmit` handler
    
- `fetch()` or `axios()` calls
    
- state cleanup
    

But it only works well if you're using **React Server Actions** in **Next.js 14+** or **React 19**.

---

## 🔄 Best Alternative

If you're **not** using React Server Components:

- Use traditional `useState`, `useReducer`, or `React Query` for managing async form submissions.
    
- Example:
    
    ```js
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
      setLoading(true);
      try {
        await submitToServer();
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }
    ```
    

---

## 🧾 Syntax of `useActionState`

```tsx
'use client';
import { useActionState } from 'react';

// A server action (async function)
async function saveData(prevState, formData) {
  const name = formData.get("name");
  if (!name) return { error: "Name is required" };

  // Simulate saving
  await new Promise((r) => setTimeout(r, 1000));
  return { success: true };
}

export default function MyForm() {
  const [state, formAction, isPending] = useActionState(saveData, {});

  return (
    <form action={formAction}>
      <input name="name" />
      <button type="submit" disabled={isPending}>
        {isPending ? "Saving..." : "Submit"}
      </button>

      {state?.error && <p style={{ color: "red" }}>{state.error}</p>}
      {state?.success && <p>Form saved successfully!</p>}
    </form>
  );
}
```

---

## 🧠 Summary (Simple → Expanded → Professional)

- **Simple**: `useActionState` helps manage form submission and loading.
    
- **Expanded**: It tracks the status and result of a form action, like success or error, and makes async code easier to manage.
    
- **Professional**: `useActionState` in React 19 streamlines form handling by integrating stateful control over async server actions, offering built-in handling for pending states and response outcomes, reducing boilerplate in modern form-based UIs.
    

---

```
import { useActionState, useState } from 'react';

import { useNavigate } from 'react-router-dom';

  

const Contact = () => {

  const navigate = useNavigate();

  

  // State to track input validity (null for neutral, true for valid, false for invalid)

  const [nameValid, setNameValid] = useState(null);

  const [emailValid, setEmailValid] = useState(null);

  

  // Action function for form submission

  const handleLogin = async (prevState, formData) => {

    const name = formData.get('name');

    const email = formData.get('email');

  

    // Validation

    if (name.length < 3) {

      return { error: 'Name must be at least 3 characters long', success: null };

    }

    if (!email.includes('@')) {

      return { error: 'Email must be valid', success: null };

    }

  

    // Simulate an async operation (e.g., API call)

    await new Promise((resolve) => setTimeout(resolve, 1000));

  

    // On success, navigate and return success state

    navigate('/');

    return { success: `Form submitted successfully, ${name}!`, error: null };

  };

  

  // Initialize useActionState with the action and initial state

  const [state, action, isPending] = useActionState(handleLogin, {

    error: null,

    success: null,

  });

  

  // Handle name input change and validation

  const handleNameChange = (e) => {

    const name = e.target.value;

    setNameValid(name.length >= 3);

  };

  

  // Handle email input change and validation

  const handleEmailChange = (e) => {

    const email = e.target.value;

    setEmailValid(email ? email.includes('@') : null); // Reset to null if empty

  };

  

  // Determine input border and ring classes based on validity

  const getInputClasses = (isValid) => {

    if (isValid === null) {

      return 'border-blue-500 focus:ring-blue-500'; // Neutral (blue)

    }

    return isValid

      ? 'border-green-500 focus:ring-green-500' // Valid (green)

      : 'border-red-500 focus:ring-red-500'; // Invalid (red)

  };

  

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">

        <h1 className="text-2xl font-bold mb-6 text-center">Contact Page</h1>

        <form action={action} className="space-y-5">

          {/* Display error or success messages */}

          {state.error && (

            <p className="text-red-600 text-center">{state.error}</p>

          )}

          {state.success && (

            <p className="text-green-600 text-center">{state.success}</p>

          )}

  

          {/* Name input */}

          <div>

            <label

              htmlFor="name"

              className="block text-sm font-medium text-gray-700 mb-1"

            >

              Name

            </label>

            <input

              type="text"

              id="name"

              name="name"

              required

              onChange={handleNameChange}

              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${getInputClasses(

                nameValid

              )}`}

            />

          </div>

  

          {/* Email input */}

          <div>

            <label

              htmlFor="email"

              className="block text-sm font-medium text-gray-700 mb-1"

            >

              Email

            </label>

            <input

              type="email"

              id="email"

              name="email"

              required

              onChange={handleEmailChange}

              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${getInputClasses(

                emailValid

              )}`}

            />

          </div>

  

          {/* Submit button */}

          <button

            type="submit"

            disabled={isPending}

            className={`w-full py-2 px-4 rounded-md text-white font-semibold transition-colors ${

              isPending

                ? 'bg-blue-300 cursor-not-allowed'

                : 'bg-blue-600 hover:bg-blue-700'

            }`}

            style={{ display: isPending ? 'none' : 'block' }} // Hide button when pending

          >

            {isPending ? 'Pending...' : 'Submit'}

          </button>

        </form>

      </div>

    </div>

  );

};

  

export default Contact;
```

Would you like a version that works with React (Client Components) without server actions too?


[[Hooks needed]]
[[forwordRef ()]]
[[UseRef HOOK]]
[[UseEffect()]]
