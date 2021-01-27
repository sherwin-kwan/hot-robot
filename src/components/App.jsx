import "../stylesheets/App.scss";
import { useEffect, useReducer, useState } from "react";
import { reducer } from "../helpers/reducer";
import { initialState } from "../helpers/settings";
import Leaderboard from "./Leaderboard";
import MainScreen from "./MainScreen";
import shuffle from "../helpers/shuffle";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [leaders, setLeaders] = useState([]);

  // Start the game
  useEffect(() => {
    dispatch({type: "setTargets", val: shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24])});
    const timer = setInterval(() => {
      dispatch({ type: "decrementTime" });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.gameOverScreen, state.leaderboardShow]);

  // Handle when robot reaches a target
  useEffect(() => {
    if (state.robot === state.target) {
      dispatch({ type: "incrementScore" });
      dispatch({ type: "nextTarget" });
    }
  }, [state.robot, state.target]);

  // Handle end of game
  useEffect(() => {
    if (state.robot === -1) {
      dispatch({ type: "endGame" , message: "Sorry, your robot went out of bounds!" });
    } else if (state.time === 0) {
      dispatch({ type: "endGame", message: "Time's up, thanks for playing!"});
    }
  }, [state.robot, state.time]);


  return (
    <>
      <header>
        <ul>
          <li className="title">HOT ROBOT</li>
          <li onClick={() => dispatch({type: "showGame"})}>Game</li>
          <li onClick={() => dispatch({type: "showLeaders"})}>Scores</li>
        </ul>
      </header>
      <main>
        {state.leaderboardShow ? <Leaderboard leaders={leaders} dispatch={dispatch} initialState={initialState} /> 
        : <MainScreen state={state} dispatch={dispatch} setLeaders={setLeaders} />}
      </main>
    </>
  );
}

export default App;
