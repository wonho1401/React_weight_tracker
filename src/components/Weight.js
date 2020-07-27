import React, { Component } from "react";

export default class weight extends Component {
  render() {
    const {
      weight,
      height,
      bmi,
      handleSubmit,
      handleWeightChange,
      handleHeightChange,
    } = this.props;
    return (
      <div className="card card-body">
        <form className="was-validated" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text bg-success text-white">
                Weight
              </span>
            </div>
            <input
              type="number"
              value={weight}
              className="form-control text-capitalize"
              placeholder="write your weight(kg)"
              onChange={handleWeightChange}
            />
          </div>
          <br />
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text bg-success text-white">
                Height
              </span>
            </div>
            <input
              type="number"
              value={height}
              className="form-control text-capitalize"
              placeholder="write your height(cm)"
              onChange={handleHeightChange}
            />
          </div>
          <br />
          <button
            className="btn btn-block btn-success mt-5 text-capitalize"
            onClick={handleSubmit}
          >
            Check BMI and Save Weight Data
          </button>
        </form>
        <div className="mt-3 bg-warning">BMI : {bmi}</div>
      </div>
    );
  }
}
