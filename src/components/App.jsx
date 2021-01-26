import "../stylesheets/App.scss";
import { useEffect, useReducer } from "react";
import { reducer } from "../helpers/reducer";
import { boardWidth, boardHeight, initialState } from "../helpers/settings";
import Square from "./Square";
import Scoreboard from './Scoreboard';
import GameOver from './GameOver';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  let timer;

  // Start the timer
  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "decrementTime" });
    }, 1000);
  }, []);

  // Handle when robot reaches a target
  useEffect(() => {
    if (state.robot === state.target) {
      dispatch({ type: "incrementScore" });
      dispatch({ type: "nextTarget" });
    }
  }, [state.robot]);

  // Handle end of game
  useEffect(() => {
    if (state.robot === -1) {
      dispatch({ type: "endGame" , message: "Sorry, your robot went out of bounds!" });
    } else if (state.time === 0) {
      dispatch({ type: "endGame", message: "Time's up, thanks for playing!"});
    }
  }, [state.robot, state.time]);

  const squares = (width, height) => {
    const arr = [];
    for (let i = 0; i < width * height; i++) {
      arr.push(
        <Square
          num={i}
          robot={state.robot}
          target={state.target}
          direction={state.direction}
        />
      );
    }
    return arr;
  };

  return (
    <>
      <header>
        <ul>
          <li className="title">HOT ROBOT</li>
          <li>Game</li>
          <li>Scores</li>
        </ul>
      </header>
      <main>
        <div className="score">
          <Scoreboard score={state.score} time={state.time} />
        </div>
        {state.gameOverScreen ? <GameOver message={state.message} /> : <div className="board">{squares(boardWidth, boardHeight)}</div>}
        <div className="buttons">
          <input
            type="image"
            src="/anticlockwise.png"
            onClick={() => dispatch({ type: "left" })}
            title="Turn Left"
          />
          <input
            type="image"
            className="forward"
            src="/forward.png"
            onClick={() => dispatch({ type: "forward" })}
            title="Forward"
          />
          <input
            type="image"
            src="/clockwise.png"
            onClick={() => dispatch({ type: "right" })}
            title="Turn Right"
          />
        </div>
        {/* <div className="states">
          <p>Robot Position: {state.robot}</p>
          <p>Target: {state.target}</p>
          <p>Score: {state.score}</p>
          <p>Direction: {state.direction}</p>
          <p>Time: {state.time}</p>
        </div> */}
      </main>
    </>
  );
}

export default App;
