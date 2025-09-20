import express from "express";
import bcrypt from "bcrypt";
import signUpModel from "../models/signUpSchema.mjs"; // 👈 renamed for clarity

const router = express.Router();

// POST /signup - Create a new user with hashed password
router.post("/signup", async (req, res) => {
  try {
    const { email, password, firstname, lastname } = req.body;

    // Validate required fields
    if (!email || !password || !firstname || !lastname) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the email already exists
    const existingUser = await signUpModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new signUpModel({
      firstname,
      lastname,
      email,
      password: hashedPassword
    });

    // Save user to DB
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
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

export default router;
