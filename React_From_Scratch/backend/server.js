// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 5000;

app.get('/api', (req, res) => {
  res.json({ Message: 'Hello from your API!' });
});

app.listen(PORT, () => {
  console.log(`🟢 API listening on http://localhost:${PORT}`);
});
