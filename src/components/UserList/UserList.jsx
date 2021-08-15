import React from "react";
import { users } from "../../data/listOfUsers";

// import UserDetails from "../User/UserDetails";
// import UserPhoto from "../User/UserPhoto";

import "./UserList.css";

const UserList = () => {
  return (
    <div>
      {users.map((user) => (
        <div className="row user">
          <div className="col-1 d-flex flex-wrap align-items-center ">
            <img
              src={user.picture.thumbnail}
              alt="profile-pic"
              className="mx-auto"
            />
          </div>
          <div className="col-6 user-details">
            <p>{user.name.first}</p>
            <p>{user.email}</p>
            <p>{user.dob.date.slice(0, 10)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
