import React, { Component } from 'react';

import './App.scss';

import MenuTree from './Menu/MenuTree/MenuTree';
import SelectedTool from './SelectedTool/SelectedTool/SelectedTool';
 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTool: null,
      hasSelected: false
    }
  }

  selectTool = (selectedTool) => {
    this.setState(prevState => {
      if(!prevState.selectedTool)
        return {
          hasSelected: true,
          selectedTool: selectedTool
        }
      return {
        selectedTool: selectedTool
      };
    });
  }

  render() {
    const {
      selectedTool,
      hasSelected
    } = this.state;

    return (
      <div className="App">
        <MenuTree 
          selectTool={this.selectTool}
        />
        <SelectedTool 
          selectedTool={selectedTool}
          hasSelected={hasSelected}
        />
      </div>
    );
  }
}

export default App;
