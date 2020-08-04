import React from "react";
import { Line } from "react-chartjs-2";

function Graph() {
  let weightData = JSON.parse(localStorage.getItem("List"));
  console.log(weightData);

  const data = {
    labels: [
      "2020.07.27 오전 8:56:53",
      "2020.07.28 오전 9:00:00",
      "2020.07.29",
      "2020.07.30",
      "2020.07.31 오전 11:36:32",
    ], //날짜 들어가야함 -> submit 할 때 state로 저장해서 가져오기?
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
