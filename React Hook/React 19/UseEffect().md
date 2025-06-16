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
### 🔄 `useEffect` with Return — What It Means

The `return` inside `useEffect` is **not** a normal return like in a function. It’s **used to clean up** or undo something when:

- the component **unmounts**, or
    
- the dependency in the dependency array **changes** (`[display]` in your case).


### 🎯 When should **you** use `'return'` in `useEffect`?

Use cleanup when:

- You use **timers**: `setInterval`, `setTimeout`
    
- You use **event listeners**: `addEventListener`
    
- You **subscribe** to something: WebSocket, API, etc.
    
- You need to **log or debug** when component unmounts (like your example)

[[Component life cycles 🚴]]
[[Inline style React]]
