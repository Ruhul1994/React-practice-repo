import { useState, useRef } from "react";
import clsx from "clsx"; // Import clsx for dynamic class handling

function App() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  function updateCount(type) {
    setCount((prev) => (type === "inc" ? prev + 1 : Math.max(prev - 1, 0)));
  }

  function startAutoUpdate(event, type) {
    if (event.button === 0 && intervalRef.current === null) {
      intervalRef.current = setInterval(() => updateCount(type), 100);
    }
  }

  function stopAutoUpdate() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        {/* Count Display with Dynamic Sizing */}
        <p
          className={clsx(
            "bg-green-200 rounded-full flex items-center justify-center transition-all",
            count < 10 ? "text-4xl w-16 h-16" : count < 100 ? "text-5xl w-20 h-20" : "text-6xl w-28 h-28"
          )}
        >
          {count}
        </p>

        <div className="mt-4">
          <button
            onMouseDown={(e) => startAutoUpdate(e, "inc")}
            onMouseUp={stopAutoUpdate}
            onMouseLeave={stopAutoUpdate}
            className="p-4 rounded bg-green-400 text-xl m-4 cursor-pointer text-white"
          >
            Count++
          </button>
          <button
            onMouseDown={(e) => startAutoUpdate(e, "dec")}
            onMouseUp={stopAutoUpdate}
            onMouseLeave={stopAutoUpdate}
            className="p-4 rounded bg-blue-400 text-xl m-4 cursor-pointer text-white"
          >
            Count--
          </button>
          <button
            onClick={() => setCount(0)}
            className="p-4 rounded bg-red-400 text-xl m-4 cursor-pointer text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
