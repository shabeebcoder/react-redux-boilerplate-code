import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from './store/counter';
function App() {
  const selector = useSelector;
  const dispatch = useDispatch();

  const count = selector(state => state.counter);
  const handleIncrement = () => {
    dispatch(incrementCount());
  };
  const handleDecrement = () => {
    dispatch(decrementCount());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The counter {count}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </header>
    </div>
  );
}

export default App;
