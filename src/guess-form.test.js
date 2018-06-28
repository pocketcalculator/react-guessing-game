import React from 'react';
import { shallow, mount } from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  })
  /*
  it('Should fire checkGuess if the user submitted input', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm guesses={[]} checkGuess={callback} />)
    const event = {
      preventDefault() {},
      target: { value: '10' }
    }
    const value = event.target.value
    wrapper.instance().handleUpdate(event)
    wrapper.simulate('submit')
    expect(callback).toHaveBeenCalled()
  })
  */
})
