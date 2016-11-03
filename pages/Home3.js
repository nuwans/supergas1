import React from "react";
import {Link } from "react-router";
import FloatingInput from '../components/FloatingInput';
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
          <FloatingInput 
            labelName="Registerd Phone No."
            type="text"
            error={this.state.PhoneNumberError}
            name="PhoneNumber"
            handler={this.handleChange.bind(this)} 
          />
          <div className="group">
            <button  className="f_btn">PROCEED TO REFIL</button>
          </div>
        </div>
        
      </div>
    );
  }
}
