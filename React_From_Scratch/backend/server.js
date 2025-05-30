//* server.js

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

//* Sample AAA games
const aaaGames = [
  { id: 1, title: "Elden Ring" },
  { id: 2, title: "God of War Ragnarök" },
  { id: 3, title: "Horizon Forbidden West" },
  { id: 4, title: "Assassin's Creed Valhalla" },
  { id: 5, title: "Red Dead Redemption 2" },
  { id: 6, title: "The Witcher 3: Wild Hunt" },
  { id: 7, title: "Call of Duty: Modern Warfare II" },
  { id: 8, title: "Cyberpunk 2077" },
  { id: 9, title: "Final Fantasy VII Remake" },
  { id: 10, title: "Ghost of Tsushima" },
];

//* Sample favourite games
const favouriteGames = [
  { id: 1, title: "Elden Ring" },
  { id: 2, title: "God of War Ragnarök" },
  { id: 3, title: "Horizon Forbidden West" },
  { id: 4, title: "Red Dead Redemption 2" },
  { id: 5, title: "The Witcher 3: Wild Hunt" },
  { id: 6, title: "Cyberpunk 2077" },
  { id: 7, title: "Ghost of Tsushima" },
];

//* Enable CORS for all routes
app.use(cors());

//* Parse JSON bodies
app.use(express.json());

//* Health‐check endpoint
app.get("/api", (req, res) => {
  res.json({ Message: "Hello from your API!" });
});

//* AAA games list
app.get("/api/games", (req, res) => {
  res.json({ games: aaaGames });
});

//* Favourite games list
app.get("/api/favourite-games", (req, res) => {
  res.json({ games: favouriteGames });
});

//* Contact form endpoint
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  //* Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "All fields (name, email, message) are required." });
  }

  //* TODO: integrate with email service or database here
  console.log("📬 New contact form submission:");
  console.log(`  Name:    ${name}`);
  console.log(`  Email:   ${email}`);
  console.log(`  Message: ${message}`);

  //* Respond with success
  res.json({ success: "Thank you! Your message has been received." });
});

//* Start server
app.listen(PORT, () => {
  console.log(`🟢 API listening on http://*localhost:${PORT}`);
});
