import PropTypes from 'prop-types';

const Scoreboard = (props) => {
  return (<>
    <table>
      <thead>
        <tr>
          <th>Your Score</th>
          <th>Time Left</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.score}</td>
          <td>{props.time}</td>
        </tr>
      </tbody>
    </table>
  </>);
};

export default Scoreboard;

Scoreboard.propTypes = {
  score: PropTypes.number,
  time: PropTypes.number
};
