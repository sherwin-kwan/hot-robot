import PropTypes from 'prop-types';

const Square = (props) => {

  const image = () => {
    if (props.robot === props.num) {
      return (<img className="robot" style={{transform: `rotate(${(props.direction + 3) % 4 * 90}deg)`}} 
    src="/pacman-sprite.png" />);
    } else if (props.target === props.num) {
      return (<img className="star" src="/star.png" />)
    } else {
      return (<img className="dot" src="/dots.png" />);
    }
  };

  return (
    <div className="square">
      {image()}
    </div>
  );
};

export default Square;

Square.propTypes = {
  num: PropTypes.number,
  robot: PropTypes.number,
  target: PropTypes.number,
  direction: PropTypes.number
};
