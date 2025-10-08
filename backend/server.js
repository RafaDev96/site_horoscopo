const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// ... (importações express, axios, cors)

const RAPIDAPI_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3YWhxa3lmdW9iY2Ztc3N4d2lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NDcwMjYsImV4cCI6MjA2NjUyMzAyNn0.Ij86SWctTeOKgJz_2cL753YkuwDVlksWdh3oTpDfF2A'; // Mantenha isso seguro!

// Crie um endpoint NO SEU server.js para o frontend chamar
app.get('/api/horoscopo/:signo', async (req, res) => {
    const { signo } = req.params; 
    const dataAtual = new Date().toISOString().slice(0, 10);

    try {
        // ESTA É A PARTE QUE CONSUME A API EXTERNA (RapidAPI)
        const response = await axios.get('https://horoscopo-brasil.p.rapidapi.com/rest/v1/horoscopes', {
            params: {
                date: dataAtual,
                sign: signo
            },
            headers: {
                'x-rapidapi-host': 'horoscopo-brasil.p.rapidapi.com',
                'x-rapidapi-key': RAPIDAPI_KEY,
            }
        });

        // Envia a resposta da API externa para o seu frontend
        res.json(response.data);

    } catch (error) {
        console.error('Erro ao buscar horóscopo:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Erro ao buscar horóscopo.' });
    }
});


  // --- FIM DA LÓGICA DE CÁLCULO ---

  res.json(astrologyData); //envia os dados calculados de volta para o frontend

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});