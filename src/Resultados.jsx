
function Resultados(props) {
    
  return (
    <section className="right">
    <p className="message">{props.message}</p>
    <p className="label-score">
      💯 Score: <span className="score">{props.score}</span>
    </p>
    <p className="label-highscore">
      🥇 Highscore: <span className="highscore">{props.highscore}</span>
    </p>
  </section>
  );
}

export default Resultados;
