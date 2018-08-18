import React, { Component } from 'react';
import style from './style.scss';
/* Class work 15 08 18 */

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stage: 0,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        stage: 1,
      });
    }, 2500);
  }

  render() {
    const { stage } = this.state;
    return (
      <div className={style.test}>
        {stage === 0 ? (<div className={style.wait}> Please wait... </div>) : (<span> DONE </span>)}
      </div>
    );
  }
}

export default MainPage;
