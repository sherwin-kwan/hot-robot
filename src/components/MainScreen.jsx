import PropTypes from "prop-types";
import { boardWidth, boardHeight, initialState } from "../helpers/settings";
import Square from "./Square";
import Scoreboard from "./Scoreboard";
import GameOver from "./GameOver";

const MainScreen = (props) => {
  const { state, dispatch } = props;

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
      <div className="score">
        <Scoreboard score={state.score} time={state.time} />
      </div>
      {state.gameOverScreen ? (
        <GameOver
          score={state.score}
          message={state.message}
          setLeaders={props.setLeaders}
          dispatch={dispatch}
          initialState={initialState}
        />
      ) : (
        <>
          <div className="board">{squares(boardWidth, boardHeight)}</div>
          <div className="buttons">
            <input
              type="image"
              alt="Turn Left"
              title="Turn left"
              src="/anticlockwise.png"
              onClick={() => dispatch({ type: "left" })}
            />
            <input
              type="image"
              alt="Forward"
              title="Move forward one space"
              className="forward"
              src="/forward.png"
              onClick={() => dispatch({ type: "forward" })}
            />
            <input
              type="image"
              alt="Turn Right"
              title="Turn right"
              src="/clockwise.png"
              onClick={() => dispatch({ type: "right" })}
            />
          </div>
        </>
      )}
    <footer>
      (C) 2021 Sherwin Kwan. Source code available <a href="https://github.com/sherwin-kwan/hot-robot">here</a>
    </footer>
    </>
  );
};

export default MainScreen;

MainScreen.propTypes = {
  state: PropTypes.object,
  dispatch: PropTypes.func,
  setLeaders: PropTypes.func,
};
