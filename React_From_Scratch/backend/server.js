//* server.js

import express from "express";
import cors    from "cors";

const app  = express();
const PORT = 5000;

app.use(cors());

app.get("/api", (req, res) => {
  res.json({ Message: "Hello from your API!" });
});

app.listen(PORT, () => {
  console.log(`🟢 API listening on http://localhost:${PORT}`);
});
