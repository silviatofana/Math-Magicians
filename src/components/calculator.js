import './calculator.css';
import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="container">
        <div className="calculator">
          <div className="row1 result">{next || total || 0}</div>
          <div className="row2">
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>AC</button>
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>+/-</button>
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>%</button>
            <button type="button" className="btn btn-orange" onClick={this.handleClick}>÷</button>
          </div>
          <div className="row3">
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>7</button>
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>8</button>
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>9</button>
            <button type="button" className="btn btn-orange" onClick={this.handleClick}>x</button>
          </div>
          <div className="row4">
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>4</button>
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>5</button>
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>6</button>
            <button type="button" className="btn btn-orange" onClick={this.handleClick}>-</button>
          </div>
          <div className="row5">
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>1</button>
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>2</button>
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>3</button>
            <button type="button" className="btn btn-orange" onClick={this.handleClick}>+</button>
          </div>
          <div className="row6">
            <button type="button" className="btn btn0 btn-gray" onClick={this.handleClick}>0</button>
            <button type="button" className="btn btn-gray" onClick={this.handleClick}>.</button>
            <button type="button" className="btn btn-orange" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
