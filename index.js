import express from 'express';
import { getGroqTarotReading } from './ai.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
 
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/tarot/reading", async (req, res) => {
    const { first, second, third, question } = req.query;
    const response = await getGroqTarotReading(first, second, third, question);
    res.send({
        status: "ok",
        response: response.choices[0].message.content,
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});