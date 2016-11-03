import React from "react";
import {Link } from "react-router";
import Input from '../components/TextInput';
import FloatingInput from '../components/FloatingInput';
import Select from '../components/Select';
export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      pincode: '4646464',
      Name:'',
      Address:''
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
          <div className="f_label">Pin Code</div>
          <input type="text" className="f_input_default" value={this.state.pincode} readOnly={true}></input>
          <Input  type="text" handler={this.handleChange.bind(this)} name='Name'  placeholder="Name"></Input>
          <Input  type="text" handler={this.handleChange.bind(this)} name='Address' placeholder="Full Address"></Input>
          <div className="f_label">Connection Type</div>
          <Select name='ConnectionType' handler={this.handleChange.bind(this)} options={['13 KG','14 KG', '15 KG']}></Select>
          <button className="f_btn">Get New Connection</button>
        </div>
      </div>
    );
  }
}
