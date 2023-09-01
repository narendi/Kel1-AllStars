import { DataTypes } from "sequelize";
import db from "../config/database.js";

const User = db.define("Daftar", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  no_telepon: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  tanggal_lahir: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  negara: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  domisili: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
