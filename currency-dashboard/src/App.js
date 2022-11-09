import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard";
import ProjectTitle from "./components/ProjectTitle";
import TextExplanation from "./components/TextExplanation";
import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <div>
      <ProjectTitle />
      <TextExplanation
        text="This project is to analyse the exchange rate between two currencies over
      time(USD is the base currency for comparison). Here the Users have the
      ability to switch between weekly, monthly, quarterly, and annual charts
      using the third dropdown menu."
        highest=" "
      />
      <DashBoard />
    </div>
  );
}

export default App;
