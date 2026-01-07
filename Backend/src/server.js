import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import app from "./app.js";

if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY not loaded");
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
