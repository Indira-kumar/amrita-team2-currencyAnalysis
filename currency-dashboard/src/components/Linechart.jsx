import React from "react";
import "./Linechart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  title: {
    display: true,
    text: "Chart.js Line Chart",
  },
  maintainAspectRatio: false,
};

const Linechart = () => {
  const currencyList = [
    {
      _id: "636b600ee066aa56c51daa51",
      currencyName: "Czech koruna",
      currencyCode: "CZK",
      exchangeRate: 20.107,
      date: "2013-11-26T18:30:00.000Z",
      __v: 0,
    },
    {
      _id: "636b600ee066aa56c51daa84",
      currencyName: "Czech koruna",
      currencyCode: "CZK",
      exchangeRate: 20.244,
      date: "2013-12-01T18:30:00.000Z",
      __v: 0,
    },
    {
      _id: "636b600ee066aa56c51daab7",
      currencyName: "Czech koruna",
      currencyCode: "CZK",
      exchangeRate: 20.222,
      date: "2013-12-02T18:30:00.000Z",
      __v: 0,
    },
    {
      _id: "636b600ee066aa56c51daaea",
      currencyName: "Czech koruna",
      currencyCode: "CZK",
      exchangeRate: 20.193,
      date: "2013-12-03T18:30:00.000Z",
      __v: 0,
    },
    {
      _id: "636b600ee066aa56c51dab1d",
      currencyName: "Czech koruna",
      currencyCode: "CZK",
      exchangeRate: 20.195,
      date: "2013-12-04T18:30:00.000Z",
      __v: 0,
    },
    {
      _id: "636b600ee066aa56c51dab50",
      currencyName: "Czech koruna",
      currencyCode: "CZK",
      exchangeRate: 20.122,
      date: "2013-12-05T18:30:00.000Z",
      __v: 0,
    },
  ];
  const currencyData = [];
  for (var i = 0; i < currencyList.length; i++) {
    currencyData.push(currencyList[i].exchangeRate);
  }
  const dates = [];
  for (i = 0; i < currencyList.length; i++) {
    dates.push(currencyList[i].date.slice(0, 10));
  }
  const data = {
    dates,
    datasets: [
      {
        label: "Currency Analysis",
        data: currencyData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="line-graph-container">
      <Line options={options} data={data} height={2} width={3} />
    </div>
  );
};

export default Linechart;
