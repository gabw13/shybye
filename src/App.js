import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid from "@mui/material/Grid";
// import Button from "@mui/material/Button";
// import Stack from "@mui/material/Stack";
import Header from "./components/Header";
import AboutTeam from "./components/AboutTeam";
import Home from "./components/Home";
import ResearchPage from "./components/ResearchPage";
import { useState, useEffect } from "react";
import StickyFooter from "./components/Footer";
// import UserPage from "./components/UserPage";
import RewardAchievement from "./components/RewardAchievement";
// import UserPage from "./components/UserPage";
import UserPage from "./components/UserPage";
import icon from "./Images/favicon.ico";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function App() {
  // const BACKENDURL = "https://shy-bye-app.fly.dev";
  // const axios = require("axios");

  // current user state keeps track of the user that is currently logged in
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const favicon = document.getElementById("favicon");
    favicon.setAttribute("href", icon);
  }, []);

  // // async call to db: POST user
  // const addNewUser = (userInfo) => {
  //   console.log("adding user");
  //   axios
  //     .post(`${BACKENDURL}/users`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // async call to db: GET user
  // const getReturningUser = (userInfo) => {
  //   console.log("getting user");
  //   axios
  //     .get(`${BACKENDURL}/users`)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const theme = createTheme({
    palette: {
      background: {
        default: "#FBFBEE",
      },
      primary: {
        main: "#468189",
      },
      secondary: {
        main: "#F4E9CD",
      },
    },
  });

  // async call to db: GET user's challenges

  // async call to db: GET user's score

  return (
    <ThemeProvider theme={theme}>
      <section className="App">
        <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/about" element={<AboutTeam />} />
          </Routes>
        </Router>

        <StickyFooter />
      </section>
    </ThemeProvider>
  );
}
