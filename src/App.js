import imagenRickMorty from "./img/rick-morty.png"
import './App.css';
import { useState } from "react";

function App() {

  const [characters, setCharacter] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();

    setCharacter(characterApi.results);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img src={imagenRickMorty} alt="Rick y Morty" className="img-home"></img>
        <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
