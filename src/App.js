import React, { Component } from 'react';
import './App.css';
import FilteredTable from "./components/FilteredTable";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredTable/>
      </div>
    );
  }
}

export default App;
