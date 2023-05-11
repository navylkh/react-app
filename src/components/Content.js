import React, { Component } from 'react';  // Component 를 사용하기 위해

class Content extends Component {
    render() {
      console.log('Content render()');
      return(
        <article>
              <h2>{this.props.title}</h2>
              {this.props.desc}
          </article>
      );
    }
  }

export default Content;
  