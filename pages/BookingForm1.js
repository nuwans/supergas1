import React from "react";
import {Link } from "react-router";
import LabelInput from '../components/LabelInput';
import Input from '../components/TextInput';
import LabelSelect from '../components/LabelSelect';
import LabelInputFull from '../components/LabelInputFull';
import DatePicker from '../components/DatePicker';
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
          <LabelInput name="name" label="Name" handler={this.handleChange.bind(this)}></LabelInput>
          <LabelInput name="AccountNumber" label="Account No." handler={this.handleChange.bind(this)}></LabelInput>
          <LabelSelect name='franchise' label="Franchise" handler={this.handleChange.bind(this)} options={['HSR LAYOUT','14 KG', '15 KG']}></LabelSelect>
          <LabelSelect name='ConnectionType' label="Connection Type" handler={this.handleChange.bind(this)} options={['13 KG','14 KG', '15 KG']}></LabelSelect>
          <LabelInputFull name="Address" label="Full Address" handler={this.handleChange.bind(this)}></LabelInputFull>
          <div className="half">
            <DatePicker name='date' label="Date" handler={this.handleChange.bind(this)} ></DatePicker>
          </div>
          <div className="half">
            <LabelSelect name='DeliverySlot' label="Delivery Slot" handler={this.handleChange.bind(this)} options={['Evening','14 KG', '15 KG']}></LabelSelect>
          </div>
          <div className="error_div">
            <ul>
                <li className="error">Address proof needs to be shown at the time of delivery.</li>
            </ul>
          </div>
          <button className="f_btn">PAY</button>
        </div>
      </div>
    );
  }
}
