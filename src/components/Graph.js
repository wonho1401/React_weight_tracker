import React from "react";
import { Line } from "react-chartjs-2";

function Graph() {
  let weightData = JSON.parse(localStorage.getItem("List"));

  console.log(weightData);
  const data = {
    labels: [
      "2020.07.27",
      "2020.07.28",
      "2020.07.29",
      "2020.07.30",
      "2020.07.31",
    ], //날짜 들어가야함
    datasets: [
      {
        label: "Weight",
        borderColor: "White",
        data: ["82", "80", "83", "84", "81"], //몸무게 들어가야함.
        pointHoverBorderColor: "white",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Daily Weight Tracker",
      fontColor: "White",
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Date",
            fontSize: 18,
            fontColor: "white",
          },
          gridLines: {
            display: false,
            color: "white",
          },
          ticks: {
            fontColor: "white",
          },
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Weight",
            fontSize: 18,
            fontColor: "white",
          },
          gridLines: {
            display: false,
            color: "white",
          },
          ticks: {
            fontColor: "white",
            min: 75,
            max: 85,
            stepSize: 1,
          },
        },
      ],
    },
  };
  return <Line data={data} options={options} />;
}

export default Graph;
