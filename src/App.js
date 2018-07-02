import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import GridSystem from './containers/GridSystem/GridSystem';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <GridSystem />
        </Layout>
      </div>
    );
  }
}

export default App;
