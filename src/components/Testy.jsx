// Używaj importów nazwanych zamiast składni `React.Component`, zwiększa to czytelność kodu
import React, { Component } from "react";

class MyClassComponent extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <div>Class Component</div>;
  }
}