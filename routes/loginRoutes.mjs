import express from "express";
import login from "../models/loginSchema.mjs"; // Assuming this is your MongoDB model
const router = express.Router();
import bcrypt from 'bcrypt';

// POST /signup - Create a new user with hashed password
router.post('/signup', async (req, res) => {
  try {
    const { name, password } = req.body;

    // ✅ Check if user already exists
    const existingUser = await Login.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // ✅ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create new user with hashed password
    const newUser = new Login({ name, password: hashedPassword });

    // ✅ Save user to DB
    const savedUser = await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: { id: savedUser._id, name: savedUser.name } // hide hashed password
    });
  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Register User
router.post("/signup", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the username already exists
        const existingUser = await login.findOne({ name: username });

        if (existingUser) {
            return res.status(400).send("User already exists. Please choose a different username.");
        }

        // Save new user
        const newUser = new login({ name: username, password });
        await newUser.save();

        res.status(201).send("User registered successfully.");
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Login User
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await login.findOne({ name: username });

        if (!user) {
            return res.status(404).send("Username not found");
        }

        if (user.password !== password) {
            return res.status(401).send("Incorrect password");
        }

        res.status(200).send("Login successful");
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;
