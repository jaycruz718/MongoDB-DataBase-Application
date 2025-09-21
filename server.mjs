import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./db/conn.mjs";
import globalErr from "./middleware/globalErr.mjs";
import log from "./middleware/loggingMiddleware.mjs";
import amphRoutes from "./routes/amphRoutes.mjs";
import loginRoutes from "./routes/loginRoutes.mjs";
import signUpRoutes from "./routes/signUpRoutes.mjs";


// Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//DB Connection
connectDB();

// Middleware
app.use(express.json());
app.use(log);

// Routes
app.use("/api/amphibian", amphRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/signUp", signUpRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Amphibian API" });
});

// Err Handling Middleware
app.use(globalErr);

// Listener
app.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
});
