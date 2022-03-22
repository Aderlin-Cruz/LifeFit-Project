import { Grid, Select } from "@material-ui/core";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";

import styles from "./Usuarios.module.css";
import Perfil from "../Perfil";
import { ErrorSharp } from "@mui/icons-material";
import { Alert } from "@mui/material";

const UsuariosLF = React.memo(() => {
  const [form, setForm] = useState();
  const [formSent, setFormSent] = useState(false);
  console.log(form);

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          cellPhone: "",
          memberShip: "",
          file: ''
        }}
        validate={(formValues) => {
          let errors = {};
          if (!formValues.name) {
            errors.name = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formValues.name)) {
            errors.name = "El nombre solo puede contener letras y espacios";
          }
          if (!formValues.lastName) {
            errors.lastName = "Por favor ingresa tus apellidos";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(formValues.lastName)) {
            errors.lastName =
              "Los apellidos solo pueden contener letras y espacios";
          }
          if (!formValues.cellPhone) {
            errors.cellPhone = "Por favor ingresa un numero";
          } else if (!/^([0-9])*$/.test(formValues.cellPhone)) {
            errors.cellPhone = "Solo puedes ingresar numeros";
          }
          if (!formValues.memberShip) {
            errors.memberShip = "Por favor Selecciona una opcion";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          setForm(values);
          resetForm();
          setFormSent(true);
          setTimeout(() => setFormSent(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className={styles.formulario}>
            <Grid container spacing={2} className={styles.containerInput}>
              <Grid item xs={7}>
                <Grid item xs={12} style={{ width: "100%" }}>
                  <label htmlFor="name" className={styles.labelInput}>
                    Nombre
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingresa tu nombre"
                    className={styles.formInput}
                  />
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <div className={styles.error}>{errors.name}</div>
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="lastName" className={styles.labelInput}>
                    Apellidos
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Ingresa tus apellidos"
                    className={styles.formInput}
                  />
                  <ErrorMessage
                    name="lastName"
                    component={() => (
                      <div className={styles.error}>{errors.lastName}</div>
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="cellPhone" className={styles.labelInput}>
                    Telefono Celular
                  </label>
                  <Field
                    type="text"
                    id="cellPhone"
                    name="cellPhone"
                    placeholder="ingresa tu telefono celular"
                    className={styles.formInput}
                  />
                  <ErrorMessage
                    name="cellPhone"
                    component={() => (
                      <div className={styles.error}>{errors.cellPhone}</div>
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="memberShip" className={styles.labelInput}>
                    Membresia
                  </label>
                  <Field
                    name="memberShip"
                    as="select"
                    className={styles.formInput}
                  > 
                    <option value="visit"> Visita</option>
                    <option value="7">Semanal</option>
                    <option value="30"> Mensual</option>
                    <option value="365"> Anual</option>
                  </Field>
                  <ErrorMessage
                    name="memberShip"
                    component={() => (
                      <div className={styles.error}>{errors.memberShip}</div>
                    )}
                  />
                </Grid>
              </Grid>

              <Grid item xs={5}>
                <Grid item xs={12} style={{ height: "100%" }}>
                  <label htmlFor="image" className={styles.addUser}>
                    Agrega una imagen de perfil
                  </label>
               
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <button type="submit" className={styles.button}>
                  Agregar Usuario
                </button>
                {formSent && (
                  <Alert className={styles.exito} severity="success">
                    El usuario ha sido agregado con exito!
                  </Alert>
                )}
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default UsuariosLF;
