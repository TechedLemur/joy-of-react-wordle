import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
function Guess({ guess, answer }) {

  const status = checkGuess(guess, answer);

  return <p className='guess'>
    {range(5).map((index) => (
      <span key={index} className={`cell ${guess && status[index]?.status}`}>{guess[index] ?? ""}</span>
    ))}
  </p>;
}

export default Guess;
