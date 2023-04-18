const express = require("express");
const oracledb = require("oracledb");

const app = express();

// Configure database connection details
const dbConfig = {
  user: "myuser",
  password: "mypassword",
  connectString: "myserver:1521/mydb",
};

// Define API endpoint that queries the database and returns the result
app.get("/data", async (req, res) => {
  try {
    // Connect to the database
    const connection = await oracledb.getConnection(dbConfig);

    // Execute a SQL query
    const result = await connection.execute("SELECT * FROM mytable");

    // Release the connection
    await connection.close();

    // Return the query result
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
