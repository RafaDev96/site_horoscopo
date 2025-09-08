const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
  res.send('Servidor do Horóscopo rodando!');
});

// Endpoint to get horoscope based on zodiac sign

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

