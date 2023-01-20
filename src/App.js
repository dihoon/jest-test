import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div className="button_container">
          <button
            data-testid="minus_button"
            disabled={disabled}
            onClick={() => setCount((current) => current - 1)}
          >
            -
          </button>
          <button
            data-testid="plus_button"
            disabled={disabled}
            onClick={() => setCount((current) => current + 1)}
          >
            +
          </button>
        </div>
        <div>
          <button
            data-testid="on/off_button"
            style={{ backgroundColor: "blue" }}
            onClick={() => setDisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
