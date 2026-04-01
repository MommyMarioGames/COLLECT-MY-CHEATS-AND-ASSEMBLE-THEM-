// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors()); // allow requests from your front-end

const codes = ["apple", "shadow", "finalboss"]; // secret codes

app.post("/check", (req, res) => {
    const { level, input } = req.body;
    if (codes[level] && codes[level] === input) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
