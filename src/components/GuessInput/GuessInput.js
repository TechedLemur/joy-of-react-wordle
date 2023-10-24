import React from 'react';

function GuessInput({addGuess}) {

  const [guess, setGuess] = React.useState('');

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(guess);
    addGuess(guess);
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
        id='guess-input'
        type='text'
        pattern='[A-Za-z]{5}' />
    </form>
  )
}

export default GuessInput;
