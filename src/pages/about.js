import React, { useEffect, useState } from "react";
import olym from "./images/Olympic.png";
import axios from "axios";

const About = () => {
  const [rowCount, setRowCount] = useState([]);
  const [qData, setqData] = useState([]);

  const getRowCount = () => {
    const rowCount = 'SELECT COUNT(*) FROM "SMITHSTEPHEN"."ATHLETE_EVENTS"';
    const queries = [rowCount];

    axios
      .get(`http://127.0.0.1:3001/data?queries=${JSON.stringify(queries)}`)
      .then((response) => {
        console.log(response.data);
        setRowCount(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getQueryData = () => {
    const query1 = `
    (SELECT region, year, medal, COUNT(*) as medal_count
    FROM SMITHSTEPHEN.earn e, SMITHSTEPHEN.athlete a, SMITHSTEPHEN.NOC_REGIONS n
    WHERE e.uniqueID = a.uniqueID AND a.noc = n.noc AND e.medal = 'Gold'
    GROUP BY region, year, medal
    ) UNION
    (SELECT region, year, medal, COUNT(*) as silver_count
    FROM SMITHSTEPHEN.earn e, SMITHSTEPHEN.athlete a, SMITHSTEPHEN.noc_regions n
    WHERE e.uniqueID = a.uniqueID AND a.noc = n.noc AND e.medal = 'Silver'
    GROUP BY region, year, medal
    ) UNION
    (SELECT region, year, medal, COUNT(*) as bronze_count

    FROM SMITHSTEPHEN.earn e, SMITHSTEPHEN.athlete a, SMITHSTEPHEN.noc_regions n
    WHERE e.uniqueID = a.uniqueID AND a.noc = n.noc AND e.medal = 'Bronze'
    GROUP BY region, year, medal
    ) ORDER BY region, year ASC
  `;

    const query2 = `
  SELECT age, sex, COUNT(medal) as medal_count
  FROM SMITHSTEPHEN.athlete a, SMITHSTEPHEN.compete c, SMITHSTEPHEN.earn e
  WHERE a.uniqueID = c.uniqueID AND age IS NOT NULL AND a.uniqueID = e.uniqueID
  GROUP BY sex, age
  ORDER BY sex DESC, age ASC
  `;

    const query3 = `
  SELECT DISTINCT men.year, men.totalMen, female.totalWomen
  FROM SMITHSTEPHEN.attend,
      (SELECT DISTINCT year, COUNT(DISTINCT id) as totalMen
      FROM SMITHSTEPHEN.athlete a, SMITHSTEPHEN.attend at
      WHERE a.noc = at.noc AND sex = 'M' 
      GROUP BY year) men,
      (SELECT DISTINCT year, COUNT(DISTINCT id) as totalWomen
      FROM SMITHSTEPHEN.athlete a, SMITHSTEPHEN.attend at
      WHERE a.noc = at.noc AND sex = 'F'
      GROUP BY year) female
  WHERE men.year = female.year
  ORDER BY men.year ASC
  `;

    const query4 = `
  SELECT 
      event, COUNT(medal) as medal_count, ROUND(AVG(weight/(height * height)) * 10000, 1) as avg_bmi,
      CASE
          WHEN weight/(height * height) < 0.00185 THEN 'Underweight'
          WHEN weight/(height * height) >= 0.00185 AND weight/(height * height) <= 0.00249 THEN 'Normal Weight'
          WHEN weight/(height * height) >= 0.0025 AND weight/(height * height) <= 0.00299 THEN 'Overweight'
          WHEN weight/(height * height) > 0.00299 THEN 'Obese'
          ELSE 'other'
      END AS BMI_ranges
  FROM SMITHSTEPHEN.athlete a, SMITHSTEPHEN.earn e, SMITHSTEPHEN.compete c
  WHERE a.uniqueID = e.uniqueID AND c.uniqueID = e.uniqueID
        AND weight IS NOT NULL AND height IS NOT NULL
  GROUP BY CASE
          WHEN weight/(height * height) < 0.00185 THEN 'Underweight'
          WHEN weight/(height * height) >= 0.00185 AND weight/(height * height) <= 0.00249 THEN 'Normal Weight'
          WHEN weight/(height * height) >= 0.0025 AND weight/(height * height) <= 0.00299 THEN 'Overweight'
          WHEN weight/(height * height) > 0.00299 THEN 'Obese'
          ELSE 'other'
      END, event
  ORDER BY event ASC
  `;

    const query5 = `
  SELECT t.noc, t.year, t.medal_count
  FROM (
    SELECT noc, year, COUNT(medal) as medal_count
    FROM SMITHSTEPHEN.athlete a, SMITHSTEPHEN.earn e
    WHERE a.uniqueID = e.uniqueID
    GROUP BY noc, year
  ) t
  JOIN (
    SELECT year, MAX(medal_count) as max_medals
    FROM (
      SELECT year, noc, COUNT(medal) as medal_count
      FROM SMITHSTEPHEN.athlete a, SMITHSTEPHEN.earn e
      WHERE a.uniqueID = e.uniqueID
      GROUP BY noc, year
    ) t
    GROUP BY year
  ) m ON t.year = m.year AND t.medal_count = m.max_medals
  ORDER BY t.year ASC
  `;

    const query6 = `
  SELECT t.noc, t.year, t.medal_count
  FROM (
    SELECT noc, year, COUNT(medal) as medal_count
    FROM SMITHSTEPHEN.athlete a, SMITHSTEPHEN.earn e
    WHERE a.uniqueID = e.uniqueID
    GROUP BY noc, year
  ) t
  JOIN (
    SELECT year, MIN(medal_count) as min_medals
    FROM (
      SELECT year, noc, COUNT(medal) as medal_count
      FROM SMITHSTEPHEN.athlete a, SMITHSTEPHEN.earn e
      WHERE a.uniqueID = e.uniqueID
      GROUP BY noc, year
    ) t
    GROUP BY year
  ) m ON t.year = m.year AND t.medal_count = m.min_medals
  ORDER BY t.year ASC
  `;

    const queries = [query1, query2, query3, query4, query5, query6];

    axios
      .get(`http://127.0.0.1:3001/data?queries=${JSON.stringify(queries)}`)
      .then((response) => {
        console.log(response.data);
        setqData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getQueryData();
  return (
    <div>
      <h1>Welcome to the Olympics Database.</h1>
      <p style={{ fontSize: "14px" }}>
        This is a website that allows users to browse data analytics about the
        past olympic games
      </p>
      <img src={olym} width="400" height="200" style={{ marginLeft: "50px" }} />
      <button onClick={getRowCount} style={{ marginLeft: "50px" }}>
        Query server for row Count
      </button>
      {rowCount && (
        <ul>
          {Object.values(rowCount).map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default About;
