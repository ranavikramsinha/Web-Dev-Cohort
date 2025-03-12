import express from "express";
import {
  getHome,
  rana,
  registerUser,
  vikram,
  ranaVikram,
  verifyUser,
  login,
} from "../controller/user.controller.js";

const router = express.Router();

router.get("/", getHome);
router.get("/rana", rana);
router.get("/vikram", vikram);
router.get("/rana-vikram", ranaVikram);
router.post("/register", registerUser);
router.get("/verify:token", verifyUser);
router.post("/login", login);

export default router;
