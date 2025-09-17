import express from 'express';
import dotenv from 'dotenv';

// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//DB Connection

// Middleware
app.use(express.json());

// Routes

// Err Handling Middleware

// Listener
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
});
