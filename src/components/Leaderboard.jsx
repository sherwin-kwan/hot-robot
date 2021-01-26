import PropTypes from 'prop-types';

const Leaderboard = (props) => {

  const scores = (leaders) => {
    console.log('Leaders are: ', leaders);
    if (leaders.length) {
      return leaders.map(leader => {
        return (<tr>
          <td>{leader.name}</td>
          <td>{leader.score}</td>
        </tr>);
    })
   } else {
    return (<tr>
      <td colSpan="2">No one has completed a game yet. You can be the first!</td>
    </tr>)
    }
  };
    
  return (
  <table className="leaderboard">
    <thead>
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {scores(props.leaders)}
    </tbody>
  </table>);
};

export default Leaderboard;

Leaderboard.propTypes = {
  leaders: PropTypes.array
};
