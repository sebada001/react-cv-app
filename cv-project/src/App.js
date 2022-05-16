import "./App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import WorkInfo from "./components/WorkInfo";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <PersonalInfo />
        <EducationInfo />
        <WorkInfo />
      </div>
    );
  }
}

export default App;
