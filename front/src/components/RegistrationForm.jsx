import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'hello' };
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <input value={name} />
      </div>
    );
  }
}

export default RegistrationForm;
