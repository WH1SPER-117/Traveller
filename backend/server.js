require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const listingRoutes = require("./routes/listingRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const Listing = require("./models/Listing");

app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);

app.get("/test", async (req,res)=>{
const listings = await Listing.find();
res.json(listings);
});

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});