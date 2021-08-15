import React from "react";

const UserDetails = (props) => {
  return (
    <div className="col-6 user-details">
      <p>{props.user.name.first}</p>
      <p>{props.user.email}</p>
      <p>{props.user.dob.date.slice(0, 10)}</p>
    </div>
  );
};

export default UserDetails;
