import { expect } from 'chai';
import * as React from 'react';
import { shallow, mount } from 'enzyme';

import Comment, { Header, Content } from './comments';

describe('Comment', () => { 

    it('should generate an header', () => {
 
      const wrapper = shallow(
        <Comment 
          author="bob" 
          content="test first ftw!" 
          date={new Date(2016, 10, 8, 17, 0)} 
        />
      );

      expect(wrapper.find(Header)).to.have.length(1);

    });

     it('should generate a content', () => {
 
      const wrapper = shallow(
        <Comment 
          author="bob" 
          content="test first ftw!" 
          date={new Date(2016, 10, 8, 17, 0)} 
        />
      );

      expect(wrapper.find(Content)).to.have.length(1);
      expect(wrapper.find(Content).at(0).props()).to.be.deep.equals({ content: "test first ftw!" })
  
    });

    it('should generate an header with the author and the date', () => {
 
      const wrapper = shallow(
        <Comment 
          author="bob" 
          content="test first ftw!" 
          date={new Date(2016, 10, 8, 17, 0)} 
        />
      );
 
      expect(wrapper.find(Header)).to.have.length(1);
      expect(wrapper.find(Header).at(0).props()).to.be.deep.equals({ author: "bob", date: new Date(2016, 10, 8, 17, 0) })

    });

});