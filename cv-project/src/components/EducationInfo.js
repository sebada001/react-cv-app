import React, { Component } from "react";
import school from "../img/school.png";

class EducationInfo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="education-info">
        <div className="education-title-area">
          <img src={school} alt="ed"></img>
          <h2>Education</h2>
        </div>
        <div className="education-content">
          <div className="education-1">
            <div className="education-year-column">1990 - 1995</div>
            <div className="education-info-column">
              <h4>Master's in Film Cutting</h4>
              <p>School of Orlando</p>
              <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem
              </p>
            </div>
          </div>
          <div className="education-2">
            <div className="education-year-column">1985 - 1990</div>
            <div className="education-info-column">
              <h4>Bachelor's in Videography</h4>
              <p>School of New York</p>
              <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationInfo;
