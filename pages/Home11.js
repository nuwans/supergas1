import React from "react";
import {Link } from "react-router";
import Input from '../components/TextInput';
export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    console.log(this.props);
    console.log(this.state);
    this.state = {
      pincode: ''
    }
  } 
  handleChange(e){
    this.setState({pincode:e.target.value});
  }
  render() {
    return (
      <div className="content">
        <div className="form">
          <input className='f_input' type="text" onChange={this.handleChange.bind(this)} placeholder="Pin Code"></input>
          <button className="f_btn">Next</button>
        </div>
      </div>
    );
  }
}
