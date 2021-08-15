import React from "react";
import UserList from "../UserList/UserList";
import UserCards from "../UserCards/UserCards";

const UserSection = () => {
  const [isList, setToggled] = useState(false);
  const [isCard, setToggled] = useState(true);

  const toggle = () => {};

  return (
    <div>
      <button onClick={toggle}>Click Me!</button>
    </div>
  );
};

export default UserSection;
