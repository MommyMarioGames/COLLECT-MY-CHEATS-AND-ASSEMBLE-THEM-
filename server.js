// server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const codes = ["lookrappturegogetmeafuckingbeer", "noooomarlownotagain", "pierplottime", "waitmarioisalive", "killmarlow"]; // your real codes

app.post("/check", (req, res) => {
    const { level, input } = req.body;
    if (!level || !input) return res.json({ success: false });
    const correct = codes[level - 1];
    if (input.toLowerCase() === correct.toLowerCase()) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
