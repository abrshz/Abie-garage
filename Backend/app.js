require('dotenv').config();
const express = require('express');
const db = require('./config/dbConfig.js');
const port = process.env.port;
const app = express();
const router = require('./routes');
app.use(router);

async function start() {
  try {
    await db.query("SELECT 'test'"); // Ensure DB connection
    console.log("Database connection established");

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Database connection error:", error.message);
  }
}

start();

module.exports = app;