//Server must be run in terminal with "node ./server.js"
//result = undefined??
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const oracledb = require("oracledb");

// Configure database connection details
const dbConfig = {
  user: "",
  password: "",
  connectString: "",
};

// Define API endpoint that queries the database and returns the result
app.get("/data", async (req, res) => {
  try {
    // Connect to the database
    const connection = await oracledb.getConnection(dbConfig);

    // Execute a SQL query
    const result = await connection.execute(
      'SELECT * from "SMITHSTEPHEN"."ATHLETE_EVENTS"'
    );

    // Release the connection
    await connection.close();

    // Return the query result

    console.log(result.row);

    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error querying database");
  }
});

// Start the server
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
