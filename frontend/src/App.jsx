import { useState } from 'react';
import UserForm from './components/UserForm';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Horóscopo da Gabi</h1>
        </header>
        <main>
          <UserForm />
        </main>
        <footer>
          <p>Desenvolvido por Gabi &copy; 2024</p>
        </footer>

    </div>
  )
}

export default App
