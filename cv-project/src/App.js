import "./App.css";
import React, { Component } from "react";
import PersonalInfo from "./components/PersonalInfo";
import EducationInfo from "./components/EducationInfo";
import WorkInfo from "./components/WorkInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personalInfo: [
        "John Treso",
        "Film Editor",
        "Random polite address 12345",
        "linkedin.com/in/yahoo",
        "832 434 3305",
        "sampleexampler@sampler.com",
      ],
      educationInfo1: [
        "1990 - 1996",
        "Master's in Film & Audio Cutting",
        "School of Central Orlando",
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      ],
      educationInfo2: [
        "1986 - 1996",
        "Bachelor's in Video Manipulation",
        "School of Central Orlando",
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      ],
      workInfo1: [
        "2006 - 2022",
        "Edit Old Hollywood Films",
        "Old Hollywood Studio",
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      ],
      workInfo2: [
        "1996 - 2006",
        "Cut Blockbusters",
        "Hidden Gem Studios",
        "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
      ],
      toInsert: { text: "" },
    };
  }
  render() {
    const {
      toInsert,
      personalInfo,
      educationInfo1,
      educationInfo2,
      workInfo1,
      workInfo2,
    } = this.state;
    return (
      <div className="app">
        <PersonalInfo toInsert={toInsert} personalInfo={personalInfo} />
        <EducationInfo
          toInsert={toInsert}
          educationInfo1={educationInfo1}
          educationInfo2={educationInfo2}
        />
        <WorkInfo
          toInsert={toInsert}
          workInfo1={workInfo1}
          workInfo2={workInfo2}
        />
      </div>
    );
  }
}

export default App;
