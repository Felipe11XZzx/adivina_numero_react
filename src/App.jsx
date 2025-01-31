import "./App.css";
// Son las que vamos a utilizar dentro del navegador.
// Esto es un react hook ('Investigar que es').
import { useRef, useState } from "react";

const number = Math.trunc(Math.random() * 20) + 1;

function App() {
  // Variables de estado.
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const inputRef = useRef(null);

  const handleCheck = () => {
    // Comprobar si el valor introducido es igual al número aleatorio.
    const inputNumber = Number(inputRef.current.value);
    if (inputNumber === number) {
      document.querySelector(".number").textContent = number;
    }
    console.log(inputRef.current.value);
    setScore(score - 1);
  };

  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20)</p>
        <button className="btn again">Again!</button>
        <div className="number">?</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <section className="right">
          <p className="message">Start guessing...</p>
          <p className="label-score">
            💯 Score: <span className="score">{score}</span>
          </p>
          <p className="label-highscore">
            🥇 Highscore: <span className="highscore">{highscore}</span>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
