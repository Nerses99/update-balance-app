import updateBalanceQueue from "../queues/updateBalanceQueue.js";

export const updateUserBalance = async (userId, amount) => {
  const job = await updateBalanceQueue.add({ userId, amount });
  return await job.finished();
};
