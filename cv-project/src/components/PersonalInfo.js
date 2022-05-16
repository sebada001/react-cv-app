import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { toInsert, personalInfo } = this.props;
    return (
      <div className="personal-info">
        <h1 className="name">{personalInfo[0]}</h1>
        <h2 className="job-title">{personalInfo[1]}</h2>
        <div className="personal-info-group">
          <div className="address">
            <strong>Adress</strong>
            <p>{personalInfo[2]}</p>
          </div>
          <div className="linkedin">
            <strong>LinkedIn</strong>
            <p>
              <a>{personalInfo[3]}</a>
            </p>
          </div>
          <div className="phone">
            <strong>Phone</strong>
            <p>{personalInfo[4]}</p>
          </div>
          <div className="email">
            <strong>E-mail</strong>
            <p>{personalInfo[5]}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default PersonalInfo;
