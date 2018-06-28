import React from 'react'

export default function PrintGuesses(props) {
  const guesses = props.guesses
  const guessesList = guesses.map((guess, index) =>
      <li key={index}>{guess}</li>
  )
  const guessCount = guesses.length
  return (
    <div>
      <p>Your guesses:</p>
      <ul>
        {guessesList}
      </ul>
      <p>Total guesses: {guessCount}</p>
    </div>
  )
}
