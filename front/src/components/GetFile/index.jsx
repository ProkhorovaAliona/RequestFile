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
        //.then(results => console.log(results))
        .then((results) => {
            this.setState({
                data: results,
           });
       });     
      }

      render() {
        if (!this.state.data) return (<p> Loading ...</p>);
        const { data } = this.state;
        return (
          <div>
              {Object.keys(data).map(key => (
                <div key={key}>
                    {key} : {data[key]}
                </div>
              ))}
          </div>
        );
      }
}

export default GetFile;