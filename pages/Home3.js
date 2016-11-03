import React from "react";
import {Link } from "react-router";
import Input from '../components/TextInput';
import Select from '../components/Select';
export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      phoneNumber:''
    }
  } 
  handleChange(name,value){
    console.log(name);
    var temp={};
    temp[name]=value;
    this.setState(temp);
  }
  render() {
    return (
      <div className="content">
        <div className="form">
          <div className="f_label">Registerd Phone Number</div>
          <input type="text" className="f_input_default" ></input>
          <button className="f_btn">PROCEED TO REFIL</button>
        </div>
        
      </div>
    );
  }
}
