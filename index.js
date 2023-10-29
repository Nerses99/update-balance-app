import "dotenv/config";
import express from "express";
import { User, sequelize } from "./models/index.js";
import balanceRoutes from "./routes/balance.js";

const app = express();

app.use(express.json());
app.use("/", balanceRoutes);

async function initializeDatabaseAndStartServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    await User.findOrCreate({
      where: { id: 1 },
      defaults: { balance: 10000 },
    });

    app.listen(5000, () => {
      console.log("Server started on http://localhost:5000");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

initializeDatabaseAndStartServer();
