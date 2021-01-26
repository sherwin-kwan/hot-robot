import PropTypes from 'prop-types';

const Square = (props) => {
  return (
    <div className="square">{props.num}</div>
  );
};

export default Square;

Square.propTypes = {
  num: PropTypes.number
};
