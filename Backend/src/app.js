import express from "express";
import cors from "cors";
import planRoutes from "./routes/planRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/plan", planRoutes);

export default app;
