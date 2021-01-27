import PropTypes from 'prop-types';
import { useState } from 'react';

const AddLeaderForm = (props) => {

  const [name, setName] = useState("");

  const saveScore = (e) => {
    e.preventDefault();
    console.log('The score is: ', props.score);
    props.setLeaders(prev => prev.concat([{name, score: props.score}]));
    props.dispatch({type: "showLeaders"});
  };

  return (
  <form>
    <label htmlFor="name">Name: </label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
    <input type="submit" value="Save your score!" onClick={saveScore} />
  </form>);
};

export default AddLeaderForm;

AddLeaderForm.propTypes = {
  setLeaders: PropTypes.func,
  score: PropTypes.number
};
