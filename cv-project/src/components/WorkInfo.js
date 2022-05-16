import React, { Component } from "react";
import work from "../img/briefcase.png";

class WorkInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { workInfo1, workInfo2 } = this.props;
    return (
      <div className="work-info">
        <div className="work-title-area">
          <img src={work} alt="wk"></img>
          <h2>Work Experience</h2>
        </div>
        <div className="work-content">
          <div className="work-1">
            <div className="work-year-column">{workInfo1[0]}</div>
            <div className="work-info-column">
              <h4>{workInfo1[1]}</h4>
              <p>{workInfo1[2]}</p>
              <p>{workInfo1[3]}</p>
            </div>
          </div>
          <div className="work-2">
            <div className="work-year-column">{workInfo2[0]}</div>
            <div className="work-info-column">
              <h4>{workInfo2[1]}</h4>
              <p>{workInfo2[2]}</p>
              <p>{workInfo2[3]}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default WorkInfo;
