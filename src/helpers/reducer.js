import { forwardFunc } from "./settings";

export const reducer = (state, action) => {
  console.log('Attempting to dispatch: ', action);
  console.log('State is: ', state);
  // Actions always available
  switch (action.type) {
    case "showLeaders":
      return {...state, leaderboardShow: true};
    case "showGame":
      return {...state, leaderboardShow: false};
  }
  if (!state.gameOn) {
    // Actions only available when game is stopped
    return action.type === "startGame" ? action.initialState : state;
  } else {
    // Actions only available when game is live
    switch (action.type) {
      case "incrementScore":
        return { ...state, score: state.score + 1 };
      case "decrementTime":
        return state.time === 0 ? state : { ...state, time: state.time - 1 };
      case "forward":
        return { ...state, robot: forwardFunc(state.robot, state.direction) };
      case "right":
        return { ...state, direction: (state.direction + 1) % 4 };
      case "left":
        return { ...state, direction: (state.direction + 3) % 4 };
      case "setTargets":
        return { ...state, targetList: action.val };
      case "nextTarget":
        return {
          ...state,
          target: state.targetList[state.score % state.targetList.length],
        };
      case "endGame":
        return { ...state, gameOn: false, gameOverScreen: true, message: action.message };
    };
  }
};
