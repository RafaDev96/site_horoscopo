#!/bin/bash
echo "🚀 Iniciando instalação das dependências do projeto full-stack (React + Node)..."

### 🧠 FRONTEND ###
echo "📦 Instalando dependências do frontend (React + Vite)..."
cd frontend || exit

# Garantir npm atualizado
npm install -g npm@latest

# Dependências principais do React
npm install react react-dom axios

# Roteamento e estado
npm install react-router-dom zustand

# Estilização
npm install @mui/material @emotion/react @emotion/styled
npm install styled-components react-icons

# Validação e formulários
npm install react-hook-form yup

# Utilidades
npm install dayjs lodash

# Ferramentas de build e qualidade
npm install -D vite eslint prettier eslint-plugin-react eslint-config-prettier eslint-plugin-prettier

echo "✅ Frontend configurado com sucesso!"
cd ..

### ⚙️ BACKEND ###
echo "📦 Instalando dependências do backend (Node + Express)..."
cd backend || exit

# Dependências principais
npm install express cors dotenv axios

# Banco de dados (ajusta conforme o que usa)
npm install mongoose          # se usar MongoDB
# npm install pg pg-hstore sequelize  # se usar PostgreSQL

# Segurança e autenticação
npm install bcrypt jsonwebtoken cookie-parser

# Upload e utilitários
npm install multer nodemon

# Desenvolvimento
npm install -D nodemon

echo "✅ Backend configurado com sucesso!"

cd ..

echo "🎉 Instalação completa! Agora você pode rodar:"
echo "👉 cd frontend && npm run dev      # para o React"
echo "👉 cd backend  && npm run dev      # para o Node (com nodemon)"
