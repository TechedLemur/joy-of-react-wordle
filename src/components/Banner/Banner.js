import React from 'react';

function Banner({ gameState, answer, guessNumber }) {
  return (
    <>
      {gameState === "won" && (
        <div className='happy banner'>
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{` ${guessNumber} guesses`}</strong>.
          </p>
        </div>)}

      {gameState === "lost" && (
        <div className='sad banner'>
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>)}
    </>
  )
}

export default Banner;
