import React from "react";

import "./App.css";
import Graph from "./components/Graph";
import Weight from "./components/Weight";
import "bootstrap/dist/css/bootstrap.min.css";

// let dateArr = [];

class App extends React.Component {
  //graphData라는 변수를 두어, 그 안에 weight와 date를 묶어놔야 할 듯.
  state = {
    graphData: [],
    date: "",
    weight: "",
    height: "",
    bmi: "",
  };
  handleWeightChange = (e) => {
    this.setState({
      weight: e.target.value, //여기가 문제?
    });
    // console.log(this.state.weight);
  };

  handleHeightChange = (e) => {
    this.setState({
      height: e.target.value,
    });
  };

  calcBmi = () => {
    const { weight, height } = this.state;
    const calculatedBmi = (weight / (height / 100) ** 2).toFixed(2);
    this.setState({
      bmi: calculatedBmi,
    });
  };

  checkDate = () => {
    const nowDate = new Date().toLocaleString().split(",")[0];
    this.setState({
      date: nowDate,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.calcBmi();
    this.checkDate();

    const newData = this.state.weight;
    const updatedData = [...this.state.graphData, newData];
    this.setState({
      weight: "",
      height: "",
      graphData: updatedData,
    });
    console.log(this.state);
    localStorage.setItem("List", JSON.stringify(updatedData));
    // let newDateArr = [dateArr, this.state.date];
    // console.log(newDateArr);
  };

  componentDidMount() {}

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
          <div className="Graph">
            <Graph
              labelData={JSON.parse(localStorage.getItem("List"))}
              weightData={JSON.parse(localStorage.getItem("List"))}
            ></Graph>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
