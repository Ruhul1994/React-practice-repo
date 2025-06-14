## UseEffect
 <p>use effect use the side effect prevent, </p>
 `useEffect(pass function as a paramter,
Optional cleanup code
, [dependency])
 use Effect(()=>{
 // write your code.
 },[state or props])`.

Many use state you can use in a  page multiple times.
when you want to a function only render one time then you will use [ ] third bracket.

```javascript
import { useEffect } from 'react';

useEffect(() => {
  // Side effect code (e.g., fetch data, set up timers)
  
  return () => {
    // Optional cleanup code (e.g., clear timers, cancel subscriptions)
  };
}, [dependencies]);
```

[[Component life cycles 🚴]]
[[Inline style React]]
