import React from 'react'

export default class GuessForm extends React.Component {

  handleUpdate = (event) => {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    const guessArray = this.props.guesses.slice()
    guessArray.push(this.state.value)
    event.preventDefault()
    this.props.checkGuess(this.state.value)
    this.props.addGuess(guessArray)
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
