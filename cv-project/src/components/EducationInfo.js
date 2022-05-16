import React, { Component } from "react";
import school from "../img/school.png";

class EducationInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { educationInfo1, educationInfo2 } = this.props;
    return (
      <div className="education-info">
        <div className="education-title-area">
          <img src={school} alt="ed"></img>
          <h2>Education</h2>
        </div>
        <div className="education-content">
          <div className="education-1">
            <div className="education-year-column">{educationInfo1[0]}</div>
            <div className="education-info-column">
              <h4>{educationInfo1[1]}</h4>
              <p>{educationInfo1[2]}</p>
              <p>{educationInfo1[3]}</p>
            </div>
          </div>
          <div className="education-2">
            <div className="education-year-column">{educationInfo2[0]}</div>
            <div className="education-info-column">
              <h4>{educationInfo2[1]}</h4>
              <p>{educationInfo2[2]}</p>
              <p>{educationInfo2[3]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationInfo;
