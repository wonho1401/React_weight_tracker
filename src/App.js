import React from "react";

import "./App.css";
import Graph from "./components/Graph";
import Weight from "./components/Weight";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  state = {
    weight: [],
    height: "",
    bmi: "",
  };

  handleWeightChange = (e) => {
    this.setState({
      weight: e.target.value,
    });
  };
  handleHeightChange = (e) => {
    this.setState({
      height: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // const { value } = e.target;
    console.log(this.state);
  };

  calcBmi = () => {
    const { weight, height } = this.state;
    console.log(height, weight);

    const calculatedBmi = (weight / (height / 100) ** 2).toFixed(2);
    this.setState({
      bmi: calculatedBmi,
    });
  };

  clearAll = () => {
    this.setState({
      weight: "",
      height: "",
      bmi: "",
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Daily Weight Tracker</h3>
          <Weight
            weight={this.state.weight}
            height={this.state.height}
            bmi={this.state.bmi}
            handleHeightChange={this.handleHeightChange}
            handleWeightChange={this.handleWeightChange}
            handleSubmit={this.handleSubmit}
            calcBmi={this.calcBmi}
          ></Weight>
          <Graph></Graph>
        </header>
      </div>
    );
  }
}

export default App;
