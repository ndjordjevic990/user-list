import { Fragment } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer.jsx";
// import UserList from "./UserList/UserList";
import UserCards from "./UserCards/UserCards";

function App() {
  return (
    <Fragment>
      <Header />
      {/* <UserList /> */}
      <UserCards />
      <Footer />
    </Fragment>
  );
}

export default App;
