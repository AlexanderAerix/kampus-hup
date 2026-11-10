const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const connectDB = require("./config/database");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route percobaan
app.get("/", (req, res) => {
    res.json({
        message: "Backend Express berhasil berjalan!"
    });
});

// Menjalankan server
const startServer = async () => {
    await connectDB();

    app.listen(process.env.PORT || 5000, () => {
        console.log("Server berjalan di port 5000");
    });
};

startServer();