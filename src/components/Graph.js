import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class graph extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card card-body text-success">
        차트가 들어올 곳<Line></Line>
      </div>
    );
  }
}
