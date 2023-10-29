import Queue from "bull";
import { User, sequelize } from "../models/index.js";

const updateBalanceQueue = new Queue("update balance");

async function updateBalance(userId, amount) {
  const transaction = await sequelize.transaction();

  try {
    const user = await User.findByPk(userId, { transaction });

    if (!user) throw new Error("User not found");

    if (user.balance - amount < 0) {
      throw new Error("Insufficient funds");
    }

    user.balance -= amount;
    await user.save({ transaction });

    await transaction.commit();

    return `New balance: ${user.balance}`;
  } catch (error) {
    await transaction.rollback();

    throw error;
  }
}

updateBalanceQueue.process(async (job) => {
  const { userId, amount } = job.data;

  return updateBalance(userId, amount);
});

export default updateBalanceQueue;
