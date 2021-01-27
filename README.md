# Hot Robot

A game where you score points by moving a Pacman to target squares around a 5x5 board. Built with React.

Game:

![](/game-progress.png)

Leaderboard:

![](/leaderboard.png)

# How to Play

1) There are controls to turn left, turn right, and move forward one space in the direction you're facing.

2) You score 1 point every time the Pacman reaches a target square (represented by a star)

3) The game ends if the Pacman is moved out of bounds (you're on the top edge, facing upwards, and move forward one more space) or if the 60-second timer runs out.

4) After the game, you will have an opportunity to add your score to the leaderboard.

NOTE: This is a serverless React app, so the leaderboard is saved in state and all scores will be lost as soon as you refresh.

# Running it locally

1) Clone the repo to your system

2) Navigate to the project folder in a shell/terminal emulator, and install dependencies with `yarn install` (You will need to have Yarn already installed)

3) Start the server with `yarn start`. Make sure port 3000 is available on your computer (that's where the app will launch by default)

4) The game should open in your browser at http://localhost:3000. Have fun!





