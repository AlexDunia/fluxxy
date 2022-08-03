//src/App.js
import React, { Component } from 'react';
import axios from 'axios';
 
class Myshit extends Component {
  state = {
    employees: []
  }
  
  componentDidMount() {
    const url = "http://localhost/Phplessons"
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ employees: data })
      console.log(this.state.employees)
     })
  }

  render() {
  
    return (
       <div className="container" style={{padding: 20}}>
        <div className="col-xs-8">
        <h1>ReactJS PHP Mysql and Axios List all data - localhost/employees.php</h1>
        <table className="table table-striped">
          <thead className="thead-light ">
            <th>Name</th>
            <th>Mat Number</th>
            <th>Date</th>
            {/* <th>Age</th>
            <th>Salary</th> */}
          </thead>
          <tbody>
          {this.state.employees.map((rs, index) => (
            <tr key={index}>
              <td>{rs.Name}</td>
              <td>{rs.Mat_No}</td>
              <td>{rs.Date}</td>
              {/* <td>{rs.age}</td>
              <td>$ {rs.salary}</td> */}
            </tr>
            ))}
          </tbody>
        </table>
        </div>
       </div>
    );
  }
}
export default Myshit;