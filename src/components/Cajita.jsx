import React from "react";
import { Box, Grid } from "@material-ui/core";

const Cajita = () => {
  /*
  <Box color="primary.main">dafhas</Box>
      <Box color="primary.contrastText" bgcolor="primary.main">
        dafhas
      </Box>
      <Box color="primary.contrastText" bgcolor="primary.main" m={2}>
        sdfds
      </Box>
      <Box color="primary.contrastText" bgcolor="primary.main" p={5}>
        sdfds
      </Box>
      <Box bordercolor="error.main" m={2} p={5} border={2}>
        sdfds
      </Box>
  */
  return (
    <div style={{
      backgroundColor: 'blue',

    }}>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Box border={2}>xs12</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box border={2}>xs12</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cajita;
