import './calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState(0);
  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.textContent));
  };

  return (
    <div className="container">
      <div className="calculator">
        <div className="row1 result">{state.next || state.total || 0}</div>
        <div className="row2">
          <button type="button" className="btn btn-gray" onClick={handleClick}>AC</button>
          <button type="button" className="btn btn-gray" onClick={handleClick}>+/-</button>
          <button type="button" className="btn btn-gray" onClick={handleClick}>%</button>
          <button type="button" className="btn btn-orange" onClick={handleClick}>÷</button>
        </div>
        <div className="row3">
          <button type="button" className="btn btn-gray" onClick={handleClick}>7</button>
          <button type="button" className="btn btn-gray" onClick={handleClick}>8</button>
          <button type="button" className="btn btn-gray" onClick={handleClick}>9</button>
          <button type="button" className="btn btn-orange" onClick={handleClick}>x</button>
        </div>
        <div className="row4">
          <button type="button" className="btn btn-gray" onClick={handleClick}>4</button>
          <button type="button" className="btn btn-gray" onClick={handleClick}>5</button>
          <button type="button" className="btn btn-gray" onClick={handleClick}>6</button>
          <button type="button" className="btn btn-orange" onClick={handleClick}>-</button>
        </div>
        <div className="row5">
          <button type="button" className="btn btn-gray" onClick={handleClick}>1</button>
          <button type="button" className="btn btn-gray" onClick={handleClick}>2</button>
          <button type="button" className="btn btn-gray" onClick={handleClick}>3</button>
          <button type="button" className="btn btn-orange" onClick={handleClick}>+</button>
        </div>
        <div className="row6">
          <button type="button" className="btn btn0 btn-gray" onClick={handleClick}>0</button>
          <button type="button" className="btn btn-gray" onClick={handleClick}>.</button>
          <button type="button" className="btn btn-orange" onClick={handleClick}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
