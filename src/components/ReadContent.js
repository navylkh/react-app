import React, { Component } from 'react';  // Component 를 사용하기 위해

class ReadContent extends Component {
    render() {
      //this.props.title = 'hi';
      // 컴포넌트 내에서 props 값을 변경할 수 없다.
      console.log('Content render()');
      return(
        <article>
              <h2>{this.props.title}</h2>
              {this.props.desc}
          </article>
      );
    }
  }

export default ReadContent;
  