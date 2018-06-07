import React from 'react'

export default function ValidateGuess(props) {
  const guess = Number(props.guess)
  const answer = Number(props.answer)
  const hot = "You're getting hot!"
  const cold = "You're too cold."
  if (guess) {

    if (guess === answer) {
      return <p>WINNER!</p>
    }
    else {
      if (Math.abs((guess - answer)) < 6) {
        return <p>You guessed {guess}. {hot}</p>
      }
      else {
        return <p>You guessed {guess}. {cold}</p>
      }
    }
  }
  else {
    return <p/>
  }
}
