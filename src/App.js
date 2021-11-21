import React, { useState, useEffect } from "react";
import "./App.css";
import Frase from "./components/Frase";

function App() {
  //state de frases
  const [frase, guardarFrase] = useState({});

  /*  const consultarAPI = () => {
    const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = api.then( respuesta => respuesta.json())
    frase.then(resultado => console.log(resultado))
  } */

  //ventaja: mismo funcioinamiento menos codigo

  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  //Cargar una frase inicial
  useEffect(() => {
    consultarAPI()
  }, [])

  return (
    <div className="contenedor">
      <Frase frase={frase} />

      <button onClick={consultarAPI} className="button">
        Obtener Frase
      </button>

      <style jsx>{`
        .button {
          background: -webkit-linear-gradient(
            top left,
            #007d35 0%,
            #007d35 40%,
            #0f574e 100%
          );
          background-size: 300px;
          font-family: "Arial", Helvetica, sans-serif;
          color: #fff;
          margin-top: 3rem;
          padding: 1rem 3rem;
          font-size: 2rem;
          border: 2px solid black;
          border-radius: 10px;
          margin-bottom: 2rem;
          transition: background-size .8s ease
        }

        .button:hover {
          cursor: pointer;
          background-size: 400px
        }

        .contenedor {
          display: flex;
          align-items: center;
          padding-top: 5rem;
          flex-direction: column;
        }

      `}</style>
    </div>
  );
}

export default App;
