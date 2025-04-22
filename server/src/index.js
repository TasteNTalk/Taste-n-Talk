
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// importing routes
import authRouter from "./routes/authUser.routes.js";

dotenv.config({
  path: "./.env"
});

const app = express();

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Routes
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
