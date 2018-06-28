import React from 'react';
import { shallow } from 'enzyme';

import PrintGuesses from './PrintGuesses';

describe('<PrintGuesses />', () => {
  it('Renders without crashing', () => {
    shallow(<PrintGuesses guesses={[]}/>);
  })
})
