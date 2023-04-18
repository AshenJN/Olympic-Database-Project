import React from "react";
import olym from "./images/Olympic.png";
const About = () => {
  const oracledb = require("oracledb");
  const config = {
    user: "",
    password: "",
    connectString: "oracle.cise.ufl.edu/orcl",
  };

  async function getAthletes() {
    let conn;

    try {
      conn = await oracledb.getConnection(config);

      const result = await conn.execute(
        'select * from "SMITHSTEPHEN"."ATHLETE_EVENT"'
      );

      console.log(result.rows);
    } catch (err) {
      console.log("Ouch!", err);
    } finally {
      if (conn) {
        // conn assignment worked, need to close
        await conn.close();
      }
    }
  }

  getAthletes();

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
{
  /*width="300" height="200"*/
}
