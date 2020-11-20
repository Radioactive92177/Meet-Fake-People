import React from "react";
import "../assets/main.css";

const Profile = ({ name, age, gender, userName, country, profilePic }) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card-image">
          <img src={`${profilePic}`} alt="" className="responsive-img" />
        </div>
      </div>
      <div className="col s12">
        <div className="collection">
          <div className="collection-item center-align">Name : {name} </div>
          <div className="collection-item center-align">Age : {age}</div>
          <div className="collection-item center-align">Gender : {gender}</div>
          <div className="collection-item center-align">
            Instagram : <span id="userName">@{userName}</span>
          </div>
          <div className="collection-item center-align">
            Country : {country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
