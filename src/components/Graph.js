import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class graph extends Component {
  render() {
    const { weight, bmi } = this.props;

    return (
      <div className="card card-body text-success">
        차트가 들어올 곳<Line></Line>
      </div>
    );
  }
}
