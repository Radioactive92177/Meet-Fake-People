import React, { Component } from "react";
import Profile from "./components/Profile";
import axios from "axios";
import "./assets/main.css";

export class App extends Component {
  state = {
    name: "",
    age: null,
    gender: "",
    userName: "",
    country: "",
    profilePic: "",
  };

  // * Fetching from the API
  getData = async () => {
    const { data } = await axios.get("https://randomuser.me/api");

    // ? Updating state
    this.setState({
      name: data.results[0].name.first,
      age: data.results[0].dob.age,
      gender: data.results[0].gender,
      userName: data.results[0].login.username,
      country: data.results[0].location.country,
      profilePic: data.results[0].picture.large,
    });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    const { name, age, gender, userName, country, profilePic } = this.state;
    return (
      <div className="container">
        <div className="card">
          <div className="card-title center-align">
            <h3>Meet Fake People</h3>
          </div>
          <div className="card-content">
            <Profile
              name={name}
              age={age}
              gender={gender}
              userName={userName}
              country={country}
              profilePic={profilePic}
            />
            <div className="row">
              <div className="col s12 center-align">
                <button
                  type="submit"
                  name="action"
                  className="btn waves-effect waves-light"
                  id="nextBtn"
                  onClick={() => this.getData()}
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
