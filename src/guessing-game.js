import React from 'react'

import GuessForm from './guess-form'
import ValidateGuess from './validate-guess'
import PrintGuesses from './print-guesses'

const answer = Math.floor(Math.random() * 100) + 1
console.log(answer)
export default class GuessingGame extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guess: '',
      answer,
      guesses: []
    }
  }
  render() {
    const guess = this.state.guess
    const guesses = this.state.guesses
    const gameTitle = `I'm thinking of a number...`
    return (
      <div>
        <p>
          {gameTitle}
        </p>
        <GuessForm
          guess={guess}
          guesses={guesses}
          checkGuess={guess => this.setState({guess})}
          addGuess={guesses => this.setState({guesses})}/>
        <ValidateGuess
          guess={guess}
          guesses={guesses}
          answer={answer}/>
        <PrintGuesses guesses={guesses}/>
      </div>
    )
  }
}
