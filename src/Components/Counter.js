import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [iniCounter, setCounter] = useState(0);

    const decreaseHandler = () => {
      setCounter((prevState) => {
        return prevState - 1;
      });
    };

    const resetHandler = () => {
        setCounter(0)

    }

  const increaseHandler = () => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };

  return (
    <div>
      <div className="wrapper">
        <div>
          <h1>Counter</h1>
        </div>
        <div>
          <span id="value">{iniCounter}</span>
        </div>
        <div className="container">
          <button
            onClick={decreaseHandler}
            className="btn decrease"
            id="btn-one"
          >
            Decrease
          </button>
          <button onClick={resetHandler} className="btn reset">
            Reset
          </button>
          <button onClick={increaseHandler} className="btn increase">
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
