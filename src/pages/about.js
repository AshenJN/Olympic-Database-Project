import React, { useEffect, useState } from "react";
import olym from "./images/Olympic.png";
import axios from "axios";

const About = () => {
  //const [tableData, setTableData] = useState([]);
  const [dataCount, setDataCount] = useState([]);

  // useEffect(() => {
  //   const rowCount = 'SELECT COUNT(*) FROM "SMITHSTEPHEN"."ATHLETE_EVENTS"';
  //   const queries = [rowCount];

  //   axios
  //     .get(`http://127.0.0.1:3001/data?queries=${JSON.stringify(queries)}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setTableData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const getDataCount = () => {
    const rowCount = 'SELECT COUNT(*) FROM "SMITHSTEPHEN"."ATHLETE_EVENTS"';
    const queries = [rowCount];

    axios
      .get(`http://127.0.0.1:3001/data?queries=${JSON.stringify(queries)}`)
      .then((response) => {
        console.log(response.data);
        setDataCount(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Welcome to the Olympics Database!</h1>
      <p style={{ fontSize: "14px" }}>
        This is a website that allows users to browse data analytics about the
        past olympic games and see trends between medals won, country performance,
        and top winners, to name a few.

      </p>
      <img src={olym} width="400" height="200" style={{ marginLeft: "50px" }} />
      <button onClick={getDataCount}>Run Query</button>
      {dataCount && (
        <ul>
          {Object.values(dataCount).map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default About;
