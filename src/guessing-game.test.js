import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessingGame from './guessing-game';

describe('<GuessingGame />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessingGame />);
  })
  it('Can make guesses', () => {
    const wrapper = shallow(<GuessingGame />);
    // Set the correctAnswer so we know what we're aiming for
    wrapper.setState({
        answer: 100,
    })
    /*
    wrapper.instance().GuessForm(25);
    expect(wrapper.state('guesses')).toEqual([25]);
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

    wrapper.instance().GuessForm(60);
    expect(wrapper.state('guesses')).toEqual([25, 60]);
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

    wrapper.instance().makeGuess(80);
    expect(wrapper.state('guesses')).toEqual([25, 60, 80]);
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.');

    wrapper.instance().makeGuess(95);
    expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95]);
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

    wrapper.instance().makeGuess(100);
    expect(wrapper.state('guesses')).toEqual([25, 60, 80, 95, 100]);
    expect(wrapper.state('feedback')).toEqual('You got it!');
    */
  })
})
