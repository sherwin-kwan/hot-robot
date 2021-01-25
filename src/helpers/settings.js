export const boardWidth = 5;
export const boardHeight = 5;

export const forwardFunc = (current, direction) => {
  switch(direction) {
    case 0:
      return (current < boardWidth) ? -1 : current - boardWidth;
    case 1:
      return (current % boardWidth === boardWidth - 1) ? -1 : current + 1;
    case 2:
      return (current + boardWidth >= boardWidth * boardHeight) ? -1 : current + boardWidth;
    case 3:
      return (current % boardWidth === 0) ? -1 : current - 1;
  }
};

export const initialState = {
  robot: 12, // Middle of a 5x5 board
  direction: 0, // Facing north
  targetList: [0, 24, 1, 23, 2, 22, 3, 21, 4, 20, 5, 19, 6, 18, 7, 17],
  target: 0,
  time: 60,
  score: 0,
  gameOn: true
};