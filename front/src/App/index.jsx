import React, { Component } from 'react';
import MainPage from 'conteiners/MainPage';
import RegistrationForm from 'components/RegistrationForm';

/* Class work 15 08 18 */

class App extends Component {
  constructor(props) {
    super(props);
    console.log('class');
  }

  render() {
    return (
      <div>
        <MainPage />
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
