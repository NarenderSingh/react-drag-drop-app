import React, { Component } from 'react';
import List from './drag-drop/List';
import Editor from './editor/Editor';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']
    };
  }

  render() {
    return (
      <div className='container'>
        <h3>Drag & Drop Component</h3>
        <List colors={this.state.colors} />
        <hr />
        <h3>Editor Component</h3>
        <Editor />
      </div>
    );
  }
}

export default App;
