Here's a concise and well-structured summary of the `useNavigate` hook in React Router v6, optimized for clarity and practicality:

---

### **`useNavigate` in React Router v6 (React 19)**
A hook for **programmatic navigation** in functional components. Replaces `useHistory` from v5.

---

### **When to Use**
- Redirect after form submissions/auth.
- Navigate dynamically (e.g., button clicks).
- Pass state between routes.
- Manipulate history (back/forward/replace).

**Avoid** for static links—use `<Link>` instead.

---

### **Key Features**
1. **Simple Navigation**:
   ```jsx
   const navigate = useNavigate();
   navigate("/about");
   ```

2. **Pass State**:
   ```jsx
   navigate("/user", { state: { id: 123 } });
   // Access with `useLocation().state`
   ```

3. **History Manipulation**:
   ```jsx
   navigate(-1); // Go back
   navigate(1);  // Go forward
   navigate("/login", { replace: true }); // Replace current history entry
   ```

4. **Dynamic Routes**:
   ```jsx
   navigate(`/posts/${postId}`);
   ```

---

### **Advantages Over Alternatives**
| Method           | Pros                                          | Cons                                  |
|------------------|-----------------------------------------------|---------------------------------------|
| `useNavigate`    | SPA-friendly, history control, state passing | Functional components only            |
| `<Link>`         | Declarative, accessible                      | Limited to user-triggered navigation  |
| `window.location`| Works universally                             | Causes full page reload (breaks SPA)  |
| `useHistory` (v5)| Legacy support                                | Deprecated in v6                      |

---

### **Example: Login Redirect**
```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Auth logic...
    navigate("/dashboard", { replace: true }); // Prevent back-navigation
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

### **Best Practices**
1. **Use `<Link>` for static navigation** (menus, headers).
2. **Prefer `useNavigate` for dynamic events** (form submissions, conditional redirects).
3. **Serialize state** when passing via `navigate`.
4. **Combine with hooks** like `useLocation`/`useParams` for complex logic.

---

### **Official Docs**
- [React Router v6 Documentation](https://reactrouter.com/docs/en/v6/api#usenavigate)

---

This guide covers core use cases, trade-offs, and practical examples. Use `useNavigate` for programmatic navigation and `<Link>` for static UI elements.


[[Link vs NavLink]]
