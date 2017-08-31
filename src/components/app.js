import React, { Component } from 'react';
import CommentBox from './comment_box'
import CommentList from './comment_list'

export default class App extends Component {
	constructor(props){
		super(props)
	}
  render() {
    return (
      <div>
        <CommentBox/>
	      <CommentList/>
      </div>
    );
  }
}
