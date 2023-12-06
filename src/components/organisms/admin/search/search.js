import React, { Component } from "react";
import "react-bootstrap";
import { Table, Form } from "react-bootstrap";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reunderResults: true,
      data: [],
      value: ""
    };
  }
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };
  render() {
    const { data, value } = this.state;
    return (
      <div className="container">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Search Details</Form.Label>
            <Form.Control
              type="email"
              placeholder="Search here"
              value={value}
              onChange={this.handleChange}
            />
            {/* <input type="text" value={value} onChange={this.handleChange} /> */}
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Search;
