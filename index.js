const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const { Pool } = require("pg");

const express = require("express");
const app = express();

const jsonParser = bodyParser.json();

const PORT = 3000;

const pool = new Pool({
  user: "postgres",
  password: "postgres",
  host: "localhost",
  database: "actors",
  port: 5432,
});

// GET http://localhost:3000/api/v1/actors - get all actors
// GET http://localhost:3000/api/v1/actors/:id - get one actors
// POST http://localhost:3000/api/v1/actors - add an actor

app.get("/api/v1/actors", async (req, res) => {
  try {
    const actors = await pool.query("SELECT * FROM actors;");

    res.send({
      status: "success",
      data: {
        actors: actors.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/v1/actors/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const actors = await pool.query("SELECT * FROM actors WHERE id = $1;", [
      id,
    ]);

    res.send({
      status: "success",
      data: {
        actors: actors.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/v1/actors/", jsonParser, async (req, res) => {
  try {
    const { firstname, lastname, rating } = req.body;

    const actors = await pool.query(
      "INSERT INTO actors (firstname, lastname, rating) VALUES ($1, $2, $3) RETURNING *",
      [firstname, lastname, rating]
    );

    res.send({
      status: "success",
      data: {
        actors: actors.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

app.put("/api/v1/actors/:id", jsonParser, async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, rating } = req.body;

    const actors = await pool.query(
      "UPDATE actors SET firstname = $1, lastname = $2, rating = $3 WHERE id = $4 RETURNING *",
      [firstname, lastname, rating, id]
    );

    res.send({
      status: "success",
      data: {
        actors: actors.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/v1/actors/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const actors = await pool.query("DELETE FROM actors WHERE id = $1;", [id]);

    res.send({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  fs.readFile(path.resolve(__dirname, "views", "index.html"), (error, data) => {
    if (error) throw error;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

app.post("/", (req, res) => {
  const body = [];

  req.on("data", (data) => {
    body.push(Buffer.from(data));
  });
  req.on("end", () => {
    console.log(body);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(body.toString()));
  });
});

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}.`);
});
