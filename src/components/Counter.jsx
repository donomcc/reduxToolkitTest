import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../slices/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [incrementAmount, setIncrementAmount] = useState("1");

  return (
    <div>
      <div className="counter">
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <div>
          <label>Increase Amount: </label>
          <input
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
          <button
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
