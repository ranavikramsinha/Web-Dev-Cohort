import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./utils/db.js";
import cookieParser from "cookie-parser";

//* import all routes
import userRoutes from "./routes/user.routers.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Cohort!");
// });

// app.get("/aryan", (req, res) => {
//   res.send("Aryan Sinha!");
// });

// app.get("/rana", (req, res) => {
//   res.send("Rana Vikram Sinah!");
// });

// console.log(process.env.PORT);

//* connect to DB
connectDB();

//* user routes
app.use("/", userRoutes);
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
