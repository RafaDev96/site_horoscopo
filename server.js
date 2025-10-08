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

//rota para calcular dados astrológicos
app.post('/calculate-astrology', (req, res) => {
  const userData = req.body;
  // Aqui você faria os cálculos astrológicos com base nos dados do usuário
  // e retornaria os resultados.
  const dummyAstrologicalData = { sunSign: "Aries", moonSign: "Taurus", risingSign: "Gemini" };
  res.json(dummyAstrologicalData); 

});

//middleware para parsing JSON
app.use(express.json());
