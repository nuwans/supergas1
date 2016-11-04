import React from "react";
import {Link } from "react-router";
import LabelInput from '../components/LabelInput';
import Input from '../components/TextInput';
import LabelSelect from '../components/LabelSelect';
import LabelInputFull from '../components/LabelInputFull';
import FloatingSelect from '../components/FloatingSelect';
import FloatingInput from '../components/FloatingInput';

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
          <FloatingSelect 
              labelName="Franchise"
              error={false}
              name="Franchise"
              options={['HSR Layout','14 KG', '15 KG']}
              handler={this.handleChange.bind(this)} 
            />
          <FloatingSelect 
              labelName="Connection Type"
              error={false}
              name="ConnectionType"
              options={['13 Kg','14 KG', '15 KG']}
              handler={this.handleChange.bind(this)} 
            />
          <FloatingInput 
              labelName="Full Address"
              type="text"
              error={this.state.PincodeError}
              name="Address"
              handler={this.handleChange.bind(this)} 
            />  
          
         
          <div className="half_wrap">
             <div className="half">
              <FloatingInput 
                labelName="Date"
                type="date"
                error={false}
                value="2016-01-01"
                name="Date"
                handler={this.handleChange.bind(this)} 
              />
             </div>
             <div className="half">
              <FloatingSelect 
                  labelName="Dilivary Slot"
                  error={false}
                  name="Franchise"
                  options={['Afternoon','14 KG', '15 KG']}
                  handler={this.handleChange.bind(this)} 
                />
              </div>
          </div>
          
          
           <div className="group">
            <button className="f_btn">Pay</button>
          </div>
          
        </div>
      </div>
    );
  }
}
