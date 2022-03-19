import React from "react";

import { BrowserRouter as Router, Switch, Route,Link,useParams,useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import Cajon from "./Cajon";
import Cajita from "./Cajita";
import { Hidden } from "@material-ui/core";
import { useState } from "react";

import AdministracionLF from "./AdministracionLF";
import CajonVacioLF from "./CajonVacioLF";
import EmpleadosLF from "./EmpleadosLF";
import ProductosLF from "./ProductosLF";
import TicketsLF from "./TicketsLF";
import UsuariosLF from "./UsuariosLF";
import VentasLF from "./VentasLF";

const estilos = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
const Contenedor = () => {
  const [abrir, setAbrir] = useState(false);
  const accionAbrir = () => {
    setAbrir(!abrir);
  };

  const classes = estilos();
  const {path, url} = useRouteMatch();
  return (
    <div className={classes.root}>
      <Navbar accionAbrir={accionAbrir} />
      <Hidden xsDown>
        <Cajon variant="permanent" open={true} />
      </Hidden>
      <Hidden smUp>
        <Cajon variant="temporary" open={abrir} onClose={accionAbrir} />
      </Hidden>
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
          <Switch>
            <Route exact path={path}>
              <CajonVacioLF/>
            </Route>
            <Route exact path={`${path}/administracion`}>
              <AdministracionLF/>
            </Route>
            <Route exact path={`${path}/tickets`}>
              <TicketsLF/>
            </Route>
            <Route exact path={`${path}/productos`}>
              <ProductosLF/>
            </Route>
            <Route exact path={`${path}/ventas`}>
              <VentasLF/>
            </Route>
            <Route exact path={`${path}/usuarios`}>
              <UsuariosLF/>
            </Route>
            <Route exact path={`${path}/empleados`}>
              <EmpleadosLF/>
            </Route>
            <Route>
            <div>
              NOt found
            </div>
            </Route>
          </Switch>
      </div>
    </div>
  );
};

export default Contenedor;
