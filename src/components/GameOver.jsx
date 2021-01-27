import PropTypes from 'prop-types';
import AddLeaderForm from './AddLeaderForm';

const GameOver = (props) => {
  return (
  <div className="game-over">
    <h2 className="title-text">GAME OVER</h2>
    <p>{props.message}</p>
    <AddLeaderForm score={props.score} setLeaders={props.setLeaders} dispatch={props.dispatch} />
    <button onClick={() => props.dispatch({type: "startGame", initialState: props.initialState})}>Play Again</button>
  </div>);
};

export default GameOver;

GameOver.propTypes = {
  message: PropTypes.string,
  dispatch: PropTypes.func,
  initialState: PropTypes.object,
  setLeaders: PropTypes.func
};
