
```javascript
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Runs on mount
    console.log('Component mounted');
    
    return () => {
      // Runs on unmount
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array means it runs once on mount/unmount

  return <div>Hello, World!</div>;
}
```

Key Points

- Class Components: Use explicit lifecycle methods (componentDidMount, etc.).
    
- Functional Components: Use hooks (use Effect, etc.) for similar functionality.
    
- Purpose: To manage side effects, optimize rendering, and ensure proper cleanup.
    
- Why Needed: To handle dynamic behavior, improve performance, and maintain clean, bug-free code.
return allowes be return when the render the  ui.