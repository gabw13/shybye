import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

const AboutTeam = () => {
  return (
    <section>
      <Grid item xs={12}>
        <h1>About the Team</h1>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <h2>UX Design & Research</h2>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>
            Linda Paredes
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>Zinet Hyssen
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>Faduma Hashi
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>Nitika aSharma
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <h2>Back End</h2>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>
            <Box>Valorie Broderick</Box>
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>Anthony Ahrens
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>Joseph Stephens
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <h2>Front End</h2>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>Gabriela Webb
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>Cristine Johnson
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>
            <Box>Valorie Broderick</Box>
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper sx={{ minHeight: 200 }} elevation={3}>
            <br></br>Kandance Ferguson
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <h1>About the Stack</h1>
        </Grid>
        <Grid item xs={12}>
          <body>
            This app was made in 4 days during the 2022 Girl Develop It Virtual
            Hackathon for Health.
            <br></br>The back end of this app was made with Spring, Java,
            PostgresQL, and deployed on fly.io.
            <br></br>The front end of this app was made with React, Javascript,
            MaterialUI, & deployed on Netlify.
            <br></br>Planning, protypes, and design were assembled on Figma.
            <br></br>Badge images sourced from Flaticon.
          </body>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutTeam;
