import { updateUserBalance } from "../services/balanceService.js";

export const updateBalance = async (req, res) => {
  const userId = parseInt(req.params.userId);
  const amount = parseInt(req.params.amount);

  try {
    const result = await updateUserBalance(userId, amount);
    res.send(result);
  } catch (error) {
    if (error.message === "User not found") {
      res.status(404).send("User not found");
    } else if (error.message === "Insufficient funds") {
      res.status(400).send("Insufficient funds");
    } else {
      console.error(error);
      res.status(500).send("An error occurred while processing the request.");
    }
  }
};
