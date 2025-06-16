Best Practices

- File Naming: Name your CSS Module files consistently (e.g., ComponentName.module.css).
    
- Colocate Styles: Place the CSS Module file in the same directory as the component for better organization.
    
- Avoid Overusing Global Styles: Use :global sparingly to maintain the benefits of scoped styles.
    
- Dynamic Classes: Use dynamic class names (e.g., styles[variant]) for conditional styling.
    
- Use clsx or classnames: These libraries simplify handling multiple or conditional classes.
    

---
```jsx
// Button.js
import React from 'react';
import styles from './Button.module.css';

function Button({ variant = 'primary' }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      Click Me
    </button>
  );
}

export default Button;
```

[[Inline style React]]
