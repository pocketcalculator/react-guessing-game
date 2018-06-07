import React from 'react'

export default class SearchForm extends React.Component {

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
            type="text"
            name="guess"
            id="guess"
            className="number"
            maxLength="3"
            autoComplete="off"
            placeholder={this.props.guess}
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
