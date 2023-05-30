import React, { Component } from 'react';  // Component 를 사용하기 위해

class CreateContent extends Component {
    render() {
      //this.props.title = 'hi';
      // 컴포넌트 내에서 props 값을 변경할 수 없다.
      console.log('Content render()');
      return(
        <article>
              <h2>Create</h2>
              <form action="/create_process" method="post"
              onSubmit={function(e){
                e.preventDefault();
                //debugger;
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value
                );
                //alert('Submit!!!');
              }.bind(this)}
              >
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p>
                  <textarea name="desc" palceholder="description"></textarea>
                </p>
                <p>
                  <input type="submit"></input>
                </p>
              </form>
          </article>
      );
    }
  }

export default CreateContent;
  