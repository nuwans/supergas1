import React from "react";
import {Link } from "react-router";
import Input from '../components/TextInput';
import FloatingInput from '../components/FloatingInput';
import Select from '../components/Select';
export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      PhoneNumber: '4646464',
      PhoneNumberError:''
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
          <FloatingInput 
            labelName="Registerd Phone No."
            type="text"
            error={this.state.PhoneNumberError}
            name="PhoneNumber"
            handler={this.handleChange.bind(this)} 
          />
        <div className="group">
          <button className="f_btn">Get New Connection</button>
        </div>
        </div>
      </div>
    );
  }
}
