import React, { Component } from "react";

class PersonalInfo extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="personal-info">
        <h1 className="name">John Ramon</h1>
        <h2 className="job-title">Film editor</h2>
        <div className="personal-info-group">
          <div className="address">
            <strong>Adress</strong>
            <p>Corner of highway street 3rd avenue</p>
          </div>
          <div className="linkedin">
            <strong>LinkedIn</strong>
            <p>
              <a>linkedin.com/in/wataba</a>
            </p>
          </div>
          <div className="phone">
            <strong>Phone</strong>
            <p>857 317 3716</p>
          </div>
          <div className="email">
            <strong>E-mail</strong>
            <p>examplesample@sampler.com</p>
          </div>
        </div>
      </div>
    );
  }
}
export default PersonalInfo;
