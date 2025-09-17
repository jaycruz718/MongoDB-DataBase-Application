import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./db/conn.mjs";
import globalErr from "./middleware/globalErr.mjs";
import log from "./middleware/loggingMiddleware.mjs";


// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//DB Connection
connectDB();

// Middleware
app.use(express.json());

// Routes

// Err Handling Middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
});
