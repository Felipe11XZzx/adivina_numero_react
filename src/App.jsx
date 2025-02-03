import "./App.css";
// Son las que vamos a utilizar dentro del navegador.
// Esto es un react hook ('Investigar que es').
import { useRef, useState, useEffect } from "react";
import Resultados from "./Resultados";

function App() {
  // Variables de estado.
  const [number, setNumber] = useState(Math.trunc(Math.random() * 20) + 1);
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const inputRef = useRef(null);
  const [showNumber, setShowNumber] = useState("?");
  const [message, setMessage] = useState("Start guessing...");
  const [guessNumber, setGuessNumber] = useState("");

  const handleCheck = () => {
    // Comprobar si el valor introducido es igual al número aleatorio.
    setGuessNumber(inputRef.current.value);
  };

  useEffect(() => {
    const guessedNumber = Number(guessNumber);
    if (guessedNumber === number) {
      setHighscore(Math.max(score, highscore));
      setMessage("🎉 Felicitaciones adivinaste el número!");
      setShowNumber(number);
    } else if (guessedNumber > number) {
      setScore(score - 1);
      setMessage("📉 El número esta en un rango menor!");
    } else {
      setScore(score - 1);
      setMessage("📈 El número esta en un rango mayor!");
      console.log(inputRef.current.value);
    }
  }, [guessNumber]);

  const handleAgain = () => {
    setScore(20);
    setHighscore(0);
    setMessage("Start guessing...");
    setNumber(Math.trunc(Math.random() * 20) + 1);
    setShowNumber("?");
    inputRef.current.value = "";
  };

  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className="between">(Between 1 and 20) {number}</p>
        <button className="btn again" onClick={handleAgain}>
          Again!
        </button>
        <div className="number">{showNumber}</div>
      </header>
      <main>
        <section className="left">
          <input type="number" className="guess" ref={inputRef} />
          <button className="btn check" onClick={handleCheck}>
            Check!
          </button>
        </section>
        <Resultados message={message} score={score} highscore={highscore} />
      </main>
    </>
  );
}
export default App;
