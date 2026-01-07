import express from "express";
import multer from "multer";
import { generatePlan } from "../controllers/planController.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post(
  "/generate",
  upload.fields([
    { name: "aroll", maxCount: 1 },
    { name: "brolls", maxCount: 6 }
  ]),
  generatePlan
);

export default router;
