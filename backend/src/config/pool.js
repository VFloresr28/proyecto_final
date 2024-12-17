const { Pool } = require('pg');

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "postgre",
  database: "marketplace",
  port: process.env.PORT || 5432,
  allowExitOnIdle: true,
});

module.exports = pool;

