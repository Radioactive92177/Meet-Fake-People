import React from "react";
import "../assets/main.css"

const Profile = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card-image">
          <img src="#" alt="" className="responsive-img" />
        </div>
      </div>
      <div className="col s12">
        <div className="collection">
          <div className="collection-item center-align">Name : </div>
          <div className="collection-item center-align">Age : </div>
          <div className="collection-item center-align">Gender :</div>
          <div className="collection-item center-align">Email :</div>
          <div className="collection-item center-align">Interested in :</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
