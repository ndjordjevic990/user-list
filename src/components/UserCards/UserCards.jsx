import React from "react";
import { users } from "../../data/listOfUsers";

import "./UserCards.css";

const UserCards = () => {
  return (
    <div className="container">
      <div className="row no-gutters">
        {users.map((user) => (
          <div className="card col-4">
            <img src={user.picture.large} alt="profile-pic" className="" />
            <div className="card-body ">
              <p className="card-text">{user.name.first}</p>
              <p className="card-text">{user.email}</p>
              <p className="card-text">{user.dob.date.slice(0, 10)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;
