import React from 'react';    //allow to use jsx code(tell compiler)
import Counter from './Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to my counter :)</h2>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
