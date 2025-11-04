require('dotenv').config();
const express = require('express');
const db = require('./config/dbConfig.js');
const app = express();
const port = process.env.port;

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