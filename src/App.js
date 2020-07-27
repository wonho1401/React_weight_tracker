import React from "react";

import "./App.css";
import Graph from "./components/Graph";
import Weight from "./components/Weight";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  //graphData라는 변수를 두어, 그 안에 weight와 date를 묶어놔야 할 듯.
  state = {
    graphData: [],
    weight: "",
    date: "",
    height: "",
    bmi: "",
  };

  handleWeightChange = (e) => {
    const { weight } = this.state;

    this.setState({
      weight: e.target.value, //여기가 문제?
    });
    localStorage.setItem("List", JSON.stringify(weight));
  };

  handleHeightChange = (e) => {
    this.setState({
      height: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      weight: this.state.weight,
      date: this.state.date,
    };

    this.calcBmi();

    const updatedData = [...this.state.graphData, newData];
    this.setState({
      weight: "",
      height: "",
      graphData: updatedData,
    });

    localStorage.setItem("List", JSON.stringify(updatedData));
  };

  calcBmi = () => {
    const { weight, height } = this.state;
    const calculatedBmi = (weight / (height / 100) ** 2).toFixed(2);
    this.setState({
      bmi: calculatedBmi,
    });
  };

  componentDidMount() {
    if (localStorage.getItem("List")) {
      // Add Data to graph bar
      // this.setState({
      //   // weight: JSON.parse(localStorage.getItem("List")),
      // });
    }
  }

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
          <Graph weight={this.state.weight} bmi={this.state.bmi}></Graph>
        </header>
      </div>
    );
  }
}

export default App;
