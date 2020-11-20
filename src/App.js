import React, { Component } from "react";
import Profile from "./components/Profile";
import "./assets/main.css";

export class App extends Component {
  state = {};
  render() {
    return (
      <div class="container">
        <div className="card">
          <div className="card-title center-align">
            <h3>Meet Fake People</h3>
          </div>
          <div className="card-content">
            <Profile />
            <div className="row">
              <div className="col s12 center-align">
                <button
                  type="submit"
                  name="action"
                  className="btn waves-effect waves-light"
                >
                  Next
                  <i className="material-icons right">send</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
