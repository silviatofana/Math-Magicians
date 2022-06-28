import './calculator.css';
import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="row1 result">0</div>
          <div className="row2">
            <button type="button" className="btn btn-gray">Ac</button>
            <button type="button" className="btn btn-gray">+/-</button>
            <button type="button" className="btn btn-gray">%</button>
            <button type="button" className="btn btn-orange">/</button>
          </div>
          <div className="row3">
            <button type="button" className="btn btn-gray">7</button>
            <button type="button" className="btn btn-gray">8</button>
            <button type="button" className="btn btn-gray">9</button>
            <button type="button" className="btn btn-orange">x</button>
          </div>
          <div className="row4">
            <button type="button" className="btn btn-gray">4</button>
            <button type="button" className="btn btn-gray">5</button>
            <button type="button" className="btn btn-gray">6</button>
            <button type="button" className="btn btn-orange">-</button>
          </div>
          <div className="row5">
            <button type="button" className="btn btn-gray">1</button>
            <button type="button" className="btn btn-gray">2</button>
            <button type="button" className="btn btn-gray">3</button>
            <button type="button" className="btn btn-orange">+</button>
          </div>
          <div className="row6">
            <button type="button" className="btn btn0 btn-gray">0</button>
            <button type="button" className="btn btn-gray">.</button>
            <button type="button" className="btn btn-orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
