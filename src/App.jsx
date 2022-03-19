import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignInSide from "./components/SignInSide";
import SignInSidePexels from "./components/SignInSidePexels";
import SignInCenter from "./components/SignInCenter";
import SignInCenterPexels from "./components/SignInCenterPexels";
import Admin from "./components/AdminStore";
import Reset from "./components/Reset";
import { auth } from "./firebase";
import Articulo from "./components/Articulo";
import { ThemeProvider } from "@material-ui/styles"; //makeStyles
import theme from "./temaConfig";
import Contenedor from "./components/Contenedor";

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  return firebaseUser !== false ? (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/principal">
            <Contenedor />
          </Route>
          <Route path="/login1" exact>
            <SignInSide />
          </Route>
          <Route path="/login2" exact>
            <SignInCenter />
          </Route>
          <Route path="/login3" exact>
            <SignInCenterPexels />
          </Route>
          <Route path="/login4" exact>
            <SignInSidePexels />
          </Route>
          <Route path="/reset" exact>
            <Reset />
          </Route>
          <Route path="/articulo/:modelo" exact>
            <Articulo />
          </Route>
          <Route >
            <div>
              NOt founds Test
            </div>
          </Route>
        </Switch>
      </ThemeProvider>    
    </Router>
  ) : (
    <p>Cargando...</p>
  );
}

export default App;
