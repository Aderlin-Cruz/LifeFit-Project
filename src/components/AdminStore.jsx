import React from "react";
import { auth } from "../firebase";
import { withRouter } from "react-router-dom";
import Store from "./Store";

const AdminStore = (props) => {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    if (auth.currentUser) {
      console.log("Existe un usuario");
      setUser(auth.currentUser);
    } else {
      console.log("No existe un usuario");
      props.history.push("/login");
    }
  }, [props.history]);

  return <div>{user && <Store />}</div>;
};

export default withRouter(AdminStore);
