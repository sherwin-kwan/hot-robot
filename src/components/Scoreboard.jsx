import PropTypes from 'prop-types';
import Display from 'seven-segment-display';

const Scoreboard = (props) => {
  return (<>
    <table>
      <thead>
        <tr>
          <th>YOUR SCORE</th>
          <th>TIME LEFT</th>
        </tr>
      </thead>
      <tbody>
        <tr className="displays">
          <td><Display value={String(props.score)} color="green" digitCount={2} /></td>
          <td><Display value={String(props.time)} color="red" digitCount={2} /></td>
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
