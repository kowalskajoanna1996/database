import React, { Component } from 'react';

import './App.scss';

import MenuTree from './Menu/MenuTree/MenuTree';
import SelectedTool from './SelectedTool/SelectedTool/SelectedTool';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuTree />
        <SelectedTool />
      </div>
    );
  }
}

export default App;
