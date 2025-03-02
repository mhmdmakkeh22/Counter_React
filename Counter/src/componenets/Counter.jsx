import { useState } from "react"
import "../style.css"

const Counter = () => {
    const [count, setCount] = useState(0)
   
  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>
      <div className="container">
        <button onClick={() => setCount(count + 1)} className="increment">
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} className="increment">
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter