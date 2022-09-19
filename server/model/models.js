const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Device = sequelize.define("device", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  producer: { type: DataTypes.STRING, allowNull: false },
  releaseYear: { type: DataTypes.STRING, allowNull: false },
  inch: { type: DataTypes.STRING, allowNull: false },
  country: { type: DataTypes.STRING, allowNull: false },
  ram: { type: DataTypes.STRING, allowNull: false },
  srr: { type: DataTypes.STRING, allowNull: false },
  nfc: { type: DataTypes.BOOLEAN, allowNull: false },
  esim: { type: DataTypes.BOOLEAN, allowNull: false },
  swc: { type: DataTypes.BOOLEAN, allowNull: false },
  price: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

module.exports = { Device };
