import React, { useEffect } from "react";
import olym from "./images/Olympic.png";
import axios from "axios";

const About = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/data")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to the Olympics Database.</h1>
      <p style={{ fontSize: "14px" }}>
        This is a website that allows users to browse data analytics about the
        past olympic games
      </p>
      <img src={olym} width="400" height="200" style={{ marginLeft: "50px" }} />
    </div>
  );
};

export default About;
