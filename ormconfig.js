const path = require("path");
const migrations =
  process.env.NODE_ENV === "development"
    ? ["src/migrations/*.ts"]
    : ["dist/migrations/*.js"];

const entities =
  process.env.NODE_ENV === "development"
    ? ["src/modules/**/entity.ts"]
    : ["dist/modules/**/entity.js"];

console.log(process.env.NODE_ENV);

module.exports = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "mysql",
  logging: ["query", "error"],
  entities,
  migrations,
  migrationsTableName: "migrations",
  cli: {
    migrationsDir: "src/migrations",
  },
};
