import React from "react";
import { auth } from "../firebase";
import { withRouter } from "react-router-dom";
import Firestore from "./Firestore";

const Admin = (props) => {
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
  return (
    <div>
      <h3 className="text-center">Ruta protegida</h3>
      console.log("user:" + user)
      {user && <Firestore user={user} />}
    </div>
  );
};

export default withRouter(Admin);
