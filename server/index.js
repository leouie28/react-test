const express = require('express');
const cors = require('cors');
const https = require('https')
const port = 4000

const app = express();

app.use(cors());

app.get('/data', async (req, res) => {
    const apiUrl = 'https://nextjs-orpin-omega-98.vercel.app/api/restaurants';

    https.get(apiUrl, (response) => {
        let data = '';

        response.on('data', (chunk) => {
        data += chunk;
        });

        response.on('end', () => {
        res.json(JSON.parse(data));
        });
    }).on('error', (error) => {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Error fetching data from the external API' });
    });
})

app.listen(port, () => {
    console.log(`Proxy server running on port ${port}`);
});