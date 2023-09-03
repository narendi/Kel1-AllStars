import { Sequelize } from "sequelize";

const db = new Sequelize("db_nusalearning", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
});

// export const JWT_SECRET = "bro123";

export default db;
