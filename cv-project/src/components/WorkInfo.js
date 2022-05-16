import React, { Component } from "react";
import work from "../img/briefcase.png";

class WorkInfo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="work-info">
        <div className="work-title-area">
          <img src={work} alt="wk"></img>
          <h2>Work Experience</h2>
        </div>
        <div className="work-content">
          <div className="work-1">
            <div className="work-year-column">2005 - 2010</div>
            <div className="work-info-column">
              <h4>Edit Old Hollywood Films</h4>
              <p>Old Hollywood Studio</p>
              <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem
              </p>
            </div>
          </div>
          <div className="work-2">
            <div className="work-year-column">1995 - 2005</div>
            <div className="work-info-column">
              <h4>Cut Blockbusters</h4>
              <p>Hidden Gem Studios</p>
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
export default WorkInfo;
