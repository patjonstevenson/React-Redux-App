import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExchangeRates from "./components/ExchangeRates";
import ExchangeForm from "./components/ExchangeForm";

function App() {
  return (
    <div className="App">
      <h1>Exchange Rates</h1>
      <ExchangeForm />
      <ExchangeRates />
    </div>
  );
}

export default App;
