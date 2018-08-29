import React, { Component } from 'react';
import MainPage from 'conteiners/MainPage';
import GetFile from 'components/GetFile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <MainPage />
        <div>
        <GetFile />
      </div>
      </div>


    );
  }
}

export default App;
