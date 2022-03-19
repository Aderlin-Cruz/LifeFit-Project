//import React
import * as React from "react";
//mui imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//imgs imports
import pexels from "./img/pexels.jpg";
import lifeFitLogoSinLetras from "./img/lifeFitLogoSinLetras.jpeg"
// imports for login
import { auth, db } from "../firebase";
import { withRouter } from "react-router-dom";

const theme = createTheme();

const SignInSidePexels = (props) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [error, setError] = React.useState(null);
  const [esRegistro, setRegistro] = React.useState(false);

  const procesarDatos = (e) => {
    console.log("siu");
    e.preventDefault();
    if (!email.trim()) {
      setError("Ingrese Email");
      return;
    }
    console.log("1");
    if (!pass.trim()) {
      setError("Ingrese Password");
      return;
    }
    console.log("2");
    if (pass.length < 6) {
      setError("Password mayor a 6 caracteres");
      return;
    }
    setError(null);
    console.log("3");
    if (esRegistro) {
      registrar();
    } else {
      loguear();
    }
  };

  const loguear = React.useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, pass);
      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/");
      console.log(res.user);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
      }
      if (error.code === "auth/user-not-found") {
        setError("Email no registrado");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
    }
  }, [email, pass, props.history]);
  const registrar = React.useCallback(async () => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, pass);
      console.log(res.user);
      await db.collection("usuarios").doc(res.user.email).set({
        email: res.user.email,
        uid: res.user.uid,
      });
      await db.collection(res.user.uid).add({
        name: "Tarea de ejemplo",
        fecha: Date.now(),
      });
      setEmail("");
      setPass("");
      setError(null);
      props.history.push("/");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Email no válido");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("Email ya utilizado");
      }
    }
  }, [email, pass, props.history]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${pexels})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 6, bgcolor: "secondary.main", width: 150, height: 150}} >
                <img src={lifeFitLogoSinLetras} width="150" height="150"/>
            </Avatar>
            <Typography component="h1" variant="h5">
              LIFEFIT
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={procesarDatos}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Usuario"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default withRouter(SignInSidePexels);
