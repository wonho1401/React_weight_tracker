import React from "react";
import { Line } from "react-chartjs-2";

function Graph() {
  let weightData = JSON.parse(localStorage.getItem("List"));
  console.log(weightData);

  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"], //날짜 들어가야함 -> submit 할 때 state로 저장해서 가져오기?
    datasets: [
      {
        label: "Weight",
        borderColor: "White",
        data: weightData, //ok
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
            min: 70,
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
