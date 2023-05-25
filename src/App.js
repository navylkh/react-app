import React, { Component } from 'react';
import TOC from "./components/TOC"
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import Subject from "./components/Subject"
import Control from "./components/Control"
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode:'create',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  render() {
    console.log('App render()');
    var _title, _desc = null, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent></CreateContent>
    }
    console.log('render', this);
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            //alert('hihihi');
            this.setState({mode:'welcome'});
          }.bind(this)}
          >
        </Subject>
        {/* <header>
              <h1><a href="/" onClick={function(e){
                // console.log('event in', this);
                // e.preventDefault();
                // return;
                console.log(e);   
                e.preventDefault();
                this.state.mode = 'welcome';
                this.setState({
                  mode:'welcome'
                }
                );
                //debugger;
              }.bind(this)}>{this.state.subject.title}</a></h1>
              {this.props.sub}
        </header> */}
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <TOC 
        onChangePage={function(id){
          //alert('hi');
          //debugger;
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        {/* <ReadContent title={_title} desc={_desc}></ReadContent> */}
        {_article}
      </div>
    );
  }
}

export default App;