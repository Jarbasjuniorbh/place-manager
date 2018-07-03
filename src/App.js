import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import GridBuilder from './containers/GridBuider/GridBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <GridBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
