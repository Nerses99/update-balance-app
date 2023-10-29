import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";
import config from "../config/config.js";
import { fileURLToPath } from "url";

const basename = path.basename(import.meta.url);

let sequelize;
sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const models = {};

const dirPath = path.dirname(fileURLToPath(import.meta.url));
const modelFiles = fs
  .readdirSync(dirPath)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
  );

for (const file of modelFiles) {
  const modelPath = path.join(dirPath, file);
  const modelModule = await import(modelPath);
  const model = modelModule.default(sequelize, Sequelize.DataTypes);
  models[model.name] = model;
}

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export { sequelize };
export const SequelizeLib = Sequelize;
export const User = models.User;
