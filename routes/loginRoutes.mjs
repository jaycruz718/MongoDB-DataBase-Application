import express from "express";
import bcrypt from "bcrypt";
import Login from "../models/loginSchema.mjs"; 
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required." });
    }

    const user = await Login.findOne({ name: username });

    if (!user) {
      return res.status(404).json({ message: "Username not found." });
    }

    /* const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password." });
    } */

    res.status(200).json({ message: "Login successful." });

  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
