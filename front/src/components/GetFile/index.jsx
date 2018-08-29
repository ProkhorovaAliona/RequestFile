import React, { Component } from 'react';

class GetFile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 'no data'
        };
    }

    componentDidMount() {
        this.getData();
      }
      
      getData() {
        fetch('http://localhost:5000/api/getTest')
        .then(results => results.json())
        .then(results => console.log(results))
        .then((results) => {
            this.setState({
                data: results,
           });
       });     
      }

      render() {
        if (!this.state.data) return (<p> Loading ...</p>);
        return (
          <div>
            <h2>1 {this.state.data} </h2>
          </div>
        );
      }
}

export default GetFile;