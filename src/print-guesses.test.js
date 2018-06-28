import React from 'react';
import { shallow } from 'enzyme';

import PrintGuesses from './print-guesses';

describe('<PrintGuesses />', () => {
  it('Renders without crashing', () => {
    shallow(<PrintGuesses guesses={[]}/>);
  })
})
