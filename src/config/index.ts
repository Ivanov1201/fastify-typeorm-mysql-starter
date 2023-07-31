import * as dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";

dotenv.config();

const port: number = Number(process.env.PORT) || 3000;

const database: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "mysql",
};

export { port, database };
