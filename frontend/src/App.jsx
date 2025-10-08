import React, { useState } from 'react'
import UserForm from './components/UserForm.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [astrologyData, setAstrologyData] = useState(null); // Estado para armazenar os dados astrológicos

  //função que sera passada como prop para o UserForm
  const handleAstrologyData = (data) => {
    setAstrologyData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Horóscopo da Gabi</h1>
        </header>
        <main>
          <UserForm onAstrologyDataCalculated={handleAstrologyData} />
          {astrologyData && (
            <div className="astrology-results">
              <h2>Resultados Astrológicos</h2>
              <p><strong>Sol:</strong> {astrologyData.sol.signo} - {astrologyData.sol.grau}°</p>
              <p><strong>Lua:</strong> {astrologyData.lua.signo} - {astrologyData.lua.grau}°</p>
              <p><strong>Ascendente:</strong> {astrologyData.ascendente.signo} - {astrologyData.ascendente.grau}°</p>
              {/* Renderize outros dados astrológicos conforme necessário */}
              <p>{astrologyData.message}</p>
            </div>
          )}
        </main>
        <footer>
          <p>Desenvolvido por RafaDev96 &copy; 2025</p>
        </footer>

    </div>
  )
}

export default App
