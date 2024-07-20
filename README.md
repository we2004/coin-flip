# coin-flip
A simple web-based coin flip game where the user plays against the computer.

Features

 User Interaction: Users can choose between "heads" or "tails" by clicking a button.
 Randomized Computer Move: The computer randomly selects "heads" or "tails" for each round.
 Score Tracking: The game tracks wins and losses and displays the scores, which are stored in localStorage for persistence.
 Visual Feedback: The interface updates to show the computer's choice and the result of each round.
 Animation: The selected button fades out and back in for a visual cue when clicked.
 Reset Score: Users can reset the score, which clears the localStorage and refreshes the page.


Technologies Used

 HTML/CSS: For structuring and styling the game interface.
 JavaScript/jQuery: For game logic, DOM manipulation, and handling user interactions.
 localStorage: For persisting the game score across sessions.

How It Works

 1 The user selects "heads" or "tails" by clicking the corresponding button.
 2 The computer randomly chooses "heads" or "tails".
 3 The game compares the user's choice with the computer's choice.
 4 The result (win or loss) is displayed, and the score is updated accordingly.
 5 The score is saved to localStorage so it persists across sessions.
 6 The user can play another round or reset the game to start over.
