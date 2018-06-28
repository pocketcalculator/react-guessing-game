import React from 'react';
import { shallow } from 'enzyme';

import ValidateGuess from './validate-guess';

describe('<ValidateGuess />', () => {
  it('Renders without crashing', () => {
    shallow(<ValidateGuess />);
  })
})
