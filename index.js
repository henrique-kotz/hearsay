import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
dotenv.config();

app.get('/search', async (req, res) => {
    try {
        const { query } = req.query;

        const url = `${process.env.API_URL}?part=snippet&q=${query}&key=${process.env.API_KEY}`;
        const response = await fetch(url);
        const result = await response.json();

        res.send(result);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});



app.listen(5000, () => {
    console.log('Listening on port 5000...');
});