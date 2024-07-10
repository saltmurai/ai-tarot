import express from 'express';
import { getGroqTarotReading } from './ai.js';
 
const app = express();
const port = 3000;

app.get("/tarot/reading", async (req, res) => {
    const { firstCard, secondCard, thirdCard, question } = req.query;
    const response = await getGroqTarotReading(firstCard, secondCard, thirdCard, question);
    res.send({
        status: "ok",
        response: response.choices[0].message.content,
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});