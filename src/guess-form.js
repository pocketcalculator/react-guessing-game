import React from 'react'

export default class GuessForm extends React.Component {

  handleUpdate = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    const guessArray = this.props.guesses.slice()
    const value = this.input.value
    guessArray.push(value)
    event.preventDefault()
    this.props.checkGuess(value)
    this.props.addGuess(guessArray)
    this.input.value = ''
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            min="0"
            max="100"
            name="guess"
            id="guess"
            className="number"
            maxLength="3"
            autoComplete="off"
            placeholder=""
            ref={input => (this.input = input)}
            required
            onChange={this.handleUpdate}
          />
          <input
            type="submit"
            id="guessButton"
            className="button"
            name="submit"
            value="Guess"
          />
        </form>
    )
  }
}
