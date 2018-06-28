import React from 'react';
import { shallow } from 'enzyme';

import ValidateGuess from './ValidateGuess';

describe('<ValidateGuess />', () => {
  it('Renders without crashing', () => {
    shallow(<ValidateGuess />);
  })
})
