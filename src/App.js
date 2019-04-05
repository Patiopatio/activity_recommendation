import React, { Component } from 'react';
import './App.css';
import Header from './header/Header'
import Table from './table/Table'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div  className="container">
          <h1>test</h1>
          <h2>sub</h2>
          <Table />
        </div>
      </div>
    );
  }
}

export default App;
