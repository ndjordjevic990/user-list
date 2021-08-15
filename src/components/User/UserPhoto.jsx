import React from "react";
import { users } from "../../data/listOfUsers";

const UserPhoto = () => {
  return (
    <div>
      {users.map((user) => (
        <div className="col-1 d-flex flex-wrap align-items-center ">
          <img
            src={user.picture.thumbnail}
            alt="profile-pic"
            className="mx-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default UserPhoto;
