import React, { useState } from "react";
import Linegraph from "./Linegraph";
import TextExplanation from "./TextExplanation";
import Axios from "axios";
import "./DashBoard.css";

const DashBoard = () => {
  const [destCurrency, setDestCurrency] = useState("DKK");
  const [renderChartBool, setRenderChartBool] = useState(false);
  const [highestCurrency, setHighestCurrency] = useState(20);
  const [response, setResponse] = useState(20);
  const [currencyList, setCurrencyList] = useState([]);

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let requestUrl =
    "http://localhost:8080/fx-rates?destCurrencyCode=" +
    { destCurrency } +
    "&fromDate=" +
    { fromDate } +
    "&toDate=" +
    { toDate };

  const getCurrencyValues = () => {
    Axios.get(requestUrl).then((res) => setResponse(res.data));
    console.log(response);
    setHighestCurrency(response.data.highest.exchangeRate);
    setCurrencyList(response.data.exchangeRates);
    setRenderChartBool(true);
  };
  const handleChangeInCurrency = (event) => {
    setDestCurrency(event.target.value);
  };
  const handleChangeInFromDate = (event) => {
    setFromDate(event.target.value);
  };
  const handleChangeInToDate = (event) => {
    setToDate(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid-box">
          <label>First Currency</label>
          <input
            name="first-currency"
            disabled={true}
            value="USD"
            className="first-currency-symbol"
            type="text"
          ></input>
          <br></br>
          <label>Second Currency</label>
          <input
            name="second-currency"
            value={destCurrency}
            className="second-currency-symbol"
            type="input"
            onChange={handleChangeInCurrency}
          ></input>
          <br></br>
          <label>From Date</label>
          <input
            className="from-date"
            label="From Date"
            type="date"
            name="from-date"
            value={fromDate}
            onChange={handleChangeInFromDate}
          ></input>
          <br></br>
          <label>To Date</label>
          <input
            className="to-date"
            label="To Date"
            type="date"
            name="to-date"
            value={toDate}
            onChange={handleChangeInToDate}
          ></input>
          <br></br>

          <button onClick={getCurrencyValues} className="button-9">
            Show Chart
          </button>
        </div>
      </form>
      {renderChartBool && (
        <div className="line-graph">
          <Linegraph currencyList={currencyList} />
        </div>
      )}
      {renderChartBool && (
        <TextExplanation
          text="The highest value of the currency for the given date is "
          highest={highestCurrency}
        />
      )}
    </div>
  );
};

export default DashBoard;
