//import React
import * as React from "react";
//mui imports
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// imports for login
import { auth, db } from "../firebase";
import { withRouter } from "react-router-dom";
//imgs imports
import lifeFitLogo from "./img/lifeFitLogo.jpeg";

const theme = createTheme();

const SignInCenter = (props) => {
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
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          backgroundImage: `url(${lifeFitLogo})`,
          backgroundRepeat: "repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "contain",
          backgroundPosition: "left",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              LIFEFIT
            </Typography>
            <Box
              component="form"
              onSubmit={procesarDatos}
              noValidate
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
            </Box>
          </Box>
        </Container>
      </Grid>
    </ThemeProvider>
  );
};

export default withRouter(SignInCenter);
