import React, { useState } from "react";

const CounterWithFuncComponent = () => {
   const [count, setCount] = useState(0)

    return <button onClick={() => setCount((prev) => prev +1)}>{count}</button>
};

export default CounterWithFuncComponent;