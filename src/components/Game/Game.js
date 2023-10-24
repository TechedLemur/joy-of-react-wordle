import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import Banner from '../Banner/Banner';
import { checkGuess } from '../../game-helpers';

function Game() {
  // Pick a random word on every pageload.
  const [answer, setAnswer] = React.useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  const [guesses, setGuesses] = React.useState(Array(NUM_OF_GUESSES_ALLOWED).fill(""));
  const [guessIndex, setGuessIndex] = React.useState(0);
  const [gameState, setGameState] = React.useState("playing");


  const resetGame = () => {
    setGuesses(Array(NUM_OF_GUESSES_ALLOWED).fill(""));
    setGuessIndex(0);
    setGameState("playing");
    setAnswer(sample(WORDS));
  }


  const addGuess = (guess) => {
    const newGuesses = [...guesses];
    newGuesses[guessIndex] = guess;
    const nextGuessIndex = guessIndex + 1;
    setGuessIndex(guessIndex + 1);
    setGuesses(newGuesses);
    updateGameState(guess, nextGuessIndex);
  }

  const updateGameState = (guess, guessNumber) => {
    const status = checkGuess(guess, answer);
    const isCorrect = status.every((letter) => letter.status === "correct");
    const isLost = guessNumber === NUM_OF_GUESSES_ALLOWED;
    if (isCorrect) {
      setGameState("won");
    } else if (isLost) {
      setGameState("lost");
    }
  }

  console.log(guesses);
  return <>
    <div className='guess-results'>
      {guesses.map((guess, index) => (
        <div key={index} className='guess-result'>
          <Guess guess={guess} answer={answer} />
        </div>
      ))}
    </div>
    {gameState !== "playing" && (
      <button onClick={resetGame} className="button-82-pushable" role="button">
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">
          Reset Game
        </span>
      </button>
    )}
    <GuessInput addGuess={addGuess}></GuessInput>
    <Banner gameState={gameState} answer={answer} guessNumber={guessIndex} />
  </>;
}

export default Game;
