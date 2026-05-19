/**
 * Database module
 * CSP451 CheckPoint 2
 * mudincer
 */

const config = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3000,
  database: process.env.DB_NAME || "mudincercheckpont2",
};

let connected = false;

function connect() {
  connected = true;

  console.log(
    `Connected to database ${config.database} at ${config.host}:${config.port}`
  );

  return {
    connected,
    driver: "in-memory-stub",
    config,
  };
}

function query(sql) {
  if (!connected) {
    throw new Error("Database is not connected.");
  }

  console.log(`Executing query: ${sql}`);

  return {
    success: true,
    rows: [],
  };
}

function getClient() {
  return {
    connected,
    config,
  };
}

function getDatabaseStatus() {
  return {
    connected,
    database: config.database,
    message: connected ? "Database connection is active." : "Database is offline.",
  };
}


module.exports = {
  connect,
  query,
  getClient,
  getDatabaseStatus,
};