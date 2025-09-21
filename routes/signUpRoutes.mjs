
import express from "express";
import bcrypt from "bcrypt";
import signUpModel from "../models/signUpSchema.mjs"; 

const router = express.Router();

// POST /signup - Create a new user
router.post("/signup", async (req, res) => {
  try {
    let { email, password, firstname, lastname } = req.body;

    // Validate required fields
    if (!email || !password || !firstname || !lastname) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Normalize and validate email
    email = email.toLowerCase().trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Check for existing user
    const existingUser = await signUpModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = new signUpModel({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully.",
      user: {
        id: savedUser._id,
        email: savedUser.email,
        firstname: savedUser.firstname,
        lastname: savedUser.lastname
      }
    });

  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ message: "Internal server error." });
  }
});

export default router;
