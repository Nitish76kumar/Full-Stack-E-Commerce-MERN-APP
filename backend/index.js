const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

app.use("/api", router);

const port = process.env.PORT || 8000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log("connnect to DB");
    console.log("Server is running " + PORT);
  });
});
