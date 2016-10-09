import { expect } from 'chai';
import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { Comment, Header } from './comments';

describe('Comment', () => { 

    it.skip('should generate an header', () => {
 
      const wrapper = shallow(
        <Comment
          author="bob" 
          date={new Date(2016, 10, 8, 17, 0)} 
        />
      );

      expect(wrapper.find(Header)).to.have.length(1);

    });

     it.skip('should generate content', () => {
 
      const wrapper = shallow(
        <Comment author="bob" date={new Date(2016, 10, 8, 17, 0)}>
          test first ftw!
        </Comment>
      );

      expect(wrapper.text()).to.contain("test first ftw!");
  
    });

});