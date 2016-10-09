import { expect } from 'chai';
import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Hello from './Hello';

describe('Hello', () => { 

    it('should say Hello!', () => {
 
      const wrapper = shallow(<Hello/>);

    });

});