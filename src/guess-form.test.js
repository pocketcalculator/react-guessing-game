import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  })
  it('Should run the checkGuess and addGuess callbacks when the form is submitted', () => {
      const checkGuessCallback = jest.fn()
      const addGuessCallback = jest.fn()
      const guesses = []
      const value = 3
      const wrapper = mount(<GuessForm checkGuess={checkGuessCallback} guesses={guesses} addGuess={addGuessCallback} />)
      wrapper.find('input[type="number"]').instance().value = value
      wrapper.simulate('submit')
      expect(checkGuessCallback).toBeCalled()
      expect(addGuessCallback).toBeCalled()
  })
  it('Should clear the form after a guess is submitted', () => {
    const checkGuessCallback = jest.fn()
    const addGuessCallback = jest.fn()
    const guesses = []
    const wrapper = mount(<GuessForm guesses={guesses} checkGuess={checkGuessCallback} addGuess={addGuessCallback} />)
    const input = wrapper.find('input[type="number"]')
    input.instance().value = 3
    wrapper.simulate('submit')
    expect(input.instance().value).toEqual('')
  })
})
