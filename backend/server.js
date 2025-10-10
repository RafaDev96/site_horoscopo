// server.js (backend)
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Use variável de ambiente (defina RAPIDAPI_KEY no .env)
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;

// GET: /api/horoscopo/:signo
app.get("/api/horoscopo/:signo", async (req, res) => {
  const { signo } = req.params;
  const dataAtual = new Date().toISOString().slice(0, 10);

  try {
    const response = await axios.get(
      "https://horoscopo-brasil.p.rapidapi.com/rest/v1/horoscopes",
      {
        params: { date: dataAtual, sign: signo },
        headers: {
          "x-rapidapi-host": "horoscopo-brasil.p.rapidapi.com",
          "x-rapidapi-key": RAPIDAPI_KEY,
        },
      }
    );

    return res.json(response.data);
  } catch (error) {
    console.error(
      "Erro ao buscar horóscopo:",
      error?.response?.data || error.message
    );
    return res.status(500).json({ error: "Erro ao buscar horóscopo." });
  }
});

// POST: /api/astrology (exemplo)
app.post("/api/astrology", async (req, res, next) => {
  try {
    const input = req.body;
    const astrologyData = await calcularAstrologia(input); // coloque sua lógica real aqui
    return res.json(astrologyData);
  } catch (err) {
    next(err);
  }
});

async function calcularAstrologia(input) {
  // sua lógica real aqui (placeholder)
  return { ok: true, message: "resultado de exemplo", input };
}

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
