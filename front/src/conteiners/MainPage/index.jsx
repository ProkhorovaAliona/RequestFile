import React, { Component } from 'react';
import style from './style.scss';
import image from './images/json.svg';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.test}>
        <header>
          <img src = {image} />
          <h1> Load the Date from JSON file </h1>
        </header>
      </div>
    );
  }
}

export default MainPage;
