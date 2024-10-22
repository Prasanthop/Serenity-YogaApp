import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import CustomerModel from "./models/Customer.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8000;

const mongoURI = process.env.MONGODB_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    // Validate inputs first
    if (!name || !email || !password) {
      return res.status(400).json("All fields are required");
    }

    const existingCustomer = await CustomerModel.findOne({ email });
    if (existingCustomer) {
      return res.status(400).json("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new CustomerModel({
      name,
      email,
      password: hashedPassword,
    });

    await newCustomer.save();
    res.status(201).json("User registered successfully");
  } catch (error) {
    console.error("Registration error:", error); // Log the error for debugging
    res.status(500).json("Error registering user: " + error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
  const user = await CustomerModel.findOne({ email });
  if (user) {
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      res.json("success");
    } else {
      res.status(401).json("Invalid password");
    }
  } else {
    res.status(404).json("User not found");
  }
  }
  catch (error) {
    console.error("Login error:", error); // Log the error for debugging
    res.status(500).json("Error logging in: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
