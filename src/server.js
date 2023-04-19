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

const dbConfig = {
  user: "t.toranzo",
  password: "rF0Z1g2kk1LmaQ2JGOeRUPjd",
  connectString: "oracle.cise.ufl.edu/orcl",
};

app.get("/data", async (req, res) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);

    const queries = JSON.parse(req.query.queries);

    const results = [];
    for (const query of queries) {
      const result = await connection.execute(query);
      results.push(result.rows);
    }

    await connection.close();

    res.send(results);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error querying database");
  }
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
