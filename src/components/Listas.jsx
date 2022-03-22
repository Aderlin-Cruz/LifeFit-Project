import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import ListItemIcon from '@mui/material/ListItemIcon';

import AssessmentIcon from '@mui/icons-material/Assessment';
import ArticleIcon from '@mui/icons-material/Article';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

import UpdateIcon from '@mui/icons-material/Update';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CreateIcon from '@mui/icons-material/Create';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

const Listas = () => {
  
  let { path, url } = useRouteMatch();

  const [openVentas, setOpenVentas] = React.useState(false);
  const handleClickVentas = () => {
    setOpenVentas(!openVentas);
  };
  const [openProductos, setOpenProductos] = React.useState(false);
  const handleClickProductos = () => {
    setOpenProductos(!openProductos);
  };
  const [openUsuarios, setOpenUsuarios] = React.useState(false);
  const handleClickUsuarios = () => {
    setOpenUsuarios(!openUsuarios);
  };
  const [openEmpleados, setOpenEmpleados] = React.useState(false);
  const handleClickEmpleados = () => {
    setOpenEmpleados(!openEmpleados);
  };
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menú principal
        </ListSubheader>
      }
    >

      <ListItemButton>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <Link to={`${url}/administracion`} style={{ textDecoration: 'none' }}><ListItemText primary="Administración" /></Link>
      </ListItemButton>
      
      <ListItemButton>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <Link to={`${url}/administracion`} style={{ textDecoration: 'none' }}><ListItemText primary="Tickets" /></Link>
      </ListItemButton>

      <ListItemButton onClick={handleClickVentas}>
        <ListItemIcon>
          <AddShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Punto de venta" />
        {openVentas ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openVentas} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Carrito 1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Carrito 2" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickUsuarios}>
        <ListItemIcon>
          <AccessibilityNewIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
        {openUsuarios ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openUsuarios} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <Link to={`${url}/usuarios`} style={{ textDecoration: 'none' }}><ListItemText primary="Nuevo Usuario" /></Link> 
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Usuarios Actuales" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickProductos}>
        <ListItemIcon>
          <InventoryIcon />
        </ListItemIcon>
        <ListItemText primary="Productos" />
        {openProductos ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openProductos} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Alta" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Modificar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Eliminar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Revisar" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickEmpleados}>
        <ListItemIcon>
          <EngineeringIcon />
        </ListItemIcon>
        <ListItemText primary="Empleados" />
        {openEmpleados ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openEmpleados} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Alta" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Modificar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Eliminar" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Revisar" />
          </ListItemButton>
        </List>
      </Collapse>      
    </List>
  );
};

export default Listas;
