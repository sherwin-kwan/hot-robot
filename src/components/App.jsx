import logo from '../logo.svg';
import '../stylesheets/App.css';
import { useEffect, useReducer } from 'react';
import { reducer } from '../helpers/reducer';
import { boardWidth, boardHeight, initialState } from '../helpers/settings';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  let timer;

  // Start the timer
  useEffect(() => {
    setInterval(() => {
      dispatch({type: 'decrementTime'});
    }, 1000)
  }, []);

  // Handle when robot reaches a target
  useEffect(() => {
    if (state.robot === state.target) {
      dispatch({type: 'incrementScore'});
      dispatch({type: 'nextTarget'});
    }
  }, [state.robot]);

  // Handle end of game
  useEffect(() => {
    if (state.robot === -1 || state.timer === 0) {
      dispatch({type: 'endGame'});
      console.log('GAME OVER');
    };
  });

  return (
    <div className="App">
      <button onClick={() => dispatch({type: 'left'})} >Left</button>
      <button onClick={() => dispatch({type: 'right'})} >Right</button>
      <button onClick={() => dispatch({type: 'forward'})} >Forward</button>
      <br />
      <p>Robot Position: {state.robot}</p>
      <p>Target: {state.target}</p>
      <p>Score: {state.score}</p>
      <p>Direction: {state.direction}</p>
      <p>Time: {state.time}</p>
    </div>
  );
}

export default App;
