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
      const guess = ''
      const guesses = [1,12,25]
      const value = 10
      const wrapper = mount(<GuessForm guess={guess} checkGuess={checkGuessCallback} guesses={guesses} addGuess={addGuessCallback} />)
      const event = {
        preventDefault() {},
        target: {value: 10}
      }
      wrapper.setState({value: 10})
      /*simulate click event into input and typing events*/
      wrapper.find('input[type="number"]').instance().value = value
      wrapper.simulate('submit')
      /*use jest to get checkGuess output*/
      expect(checkGuessCallback).toBeCalled()
      expect(addGuessCallback).toBeCalled()
  })
})
