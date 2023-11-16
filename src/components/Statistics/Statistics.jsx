import React, { Component } from 'react';

export class Statistics extends Component {
  render() {
    return <div> </div>;
  }
}

export class Counter extends Component {
  static defaultProps = {
    step: 3,
    value: 1,
  };

  state = {
    value: this.props.value,
    step: this.props.step,
  };

  handleDecrement = () => {
    this.setState(() => ({ value: this.state.value - this.state.step }));
    console.log(typeof(this.state.value))
    console.log(typeof(this.state.step))
  };

  handleIncrement = () =>{
    this.setState(() => ({ value: (this.state.value) + (this.state.step) }));

    console.log(typeof(this.state.value))
    console.log(typeof(this.state.step))
  }

  handleStepChange = e => {
    this.setState(() => ({step: Number(e.target.value) }));
  };

  render() {


    return (
      <div>
        <button type="button" onClick={this.handleDecrement}>
          - {this.state.step}
        </button>
        <span>{this.state.value}</span>
        <button type="button" onClick={this.handleIncrement}>
          + {this.state.step}
        </button>
        <label for="input">change step</label>
        <input
          type="number"
          id="input"
          value={this.state.step}
          onChange={this.handleStepChange}
        ></input>
      </div>
    );
  }
}
