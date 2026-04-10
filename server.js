const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./server/config/db");
const authRoutes = require("./server/routes/authRoutes");
const testRoutes = require("./server/routes/testRoutes");

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//test route
app.get("/", (req, res) => {
    res.send ("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});

//connect to database
connectDB();

app.use("/api/auth", authRoutes);

app.use ("/api/test", testRoutes);
