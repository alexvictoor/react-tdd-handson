import { expect } from 'chai';
import * as React from 'react';
import { shallow, mount } from 'enzyme';

import { Comment, CommentData, Header, CommentBox, CommentLoader } from './comments';


describe('Comment', () => { 

    it('should generate an header', () => {
 
      const wrapper = shallow(
        <Comment
          author="bob" 
          date={new Date(2016, 10, 8, 17, 0)} 
        />
      );

      expect(wrapper.find(Header)).to.have.length(1);

    });

     it('should generate content', () => {
 
      const wrapper = shallow(
        <Comment author="bob" date={new Date(2016, 10, 8, 17, 0)}>
          test first ftw!
        </Comment>
      );

      expect(wrapper.text()).to.contain("test first ftw!");
  
    });

    it('should generate an header with the author and the date', () => {
 
      const wrapper = shallow(
        <Comment author="bob" date={new Date(2016, 10, 8, 17, 0)}>
          test first ftw!
        </Comment>
      );
 
      expect(wrapper.find(Header)).to.have.length(1);
      expect(wrapper.find(Header).at(0).props()).to.be.deep.equals({ author: "bob", date: new Date(2016, 10, 8, 17, 0) })

    });

});

describe('CommentBox', () => { 

    it('should generate a comment list', () => {
 
      const loader: CommentLoader = (cb) => cb([
        {id: 1, author: "Pete Hunt", text: "This is one comment", date: new Date(2016, 10, 8, 17, 0)},
        {id: 2, author: "Jordan Walke", text: "This is *another* comment", date: new Date(2016, 10, 8, 17, 42)}
      ]); 

      const wrapper = mount(
        <CommentBox
          loader={loader}
        />
      );

      expect(wrapper.find(Comment)).to.have.length(2);
      expect(wrapper.find(Comment).at(0).props()).to.be.deep.equal({author: "Pete Hunt", date: new Date(2016, 10, 8, 17, 0)})

    });
});
