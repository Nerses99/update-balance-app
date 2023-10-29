import express from "express";
import { updateBalance } from "../controllers/balanceController.js";

const router = express.Router();

router.post("/update_balance/:userId/:amount", updateBalance);

export default router;
