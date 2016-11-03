import React from "react";
import {Link } from "react-router";
import Input from '../components/TextInput';
import FloatingInput from '../components/FloatingInput';
import FloatingSelect from '../components/FloatingSelect';
export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    console.log(this.props);
    console.log(this.state);
    this.state = {
      Pincode: '',
      PincodeError:'',
      showForm:false
    }
  } 
  handleChange(name,value){
    if(isNaN(value)==true){
      console.log('aa');
      this.setState({PincodeError:'Not a number'});
    }else{
       this.setState({PincodeError:''});
    }
    this.setState({Pincode:value});
  }
  ValidatePin(){
    this.setState({showForm:true});
  }
  handleTextInput(name,value){
    var temp={};
    temp[name]=value;
    this.setState(temp);
  }
  render() {
    return (
      <div className="content">
        <div className="form">
          <FloatingInput 
            labelName="Pin Code"
            type="text"
            error={this.state.PincodeError}
            name="Pincode"
            handler={this.handleChange.bind(this)} 
          />
          { this.state.showForm ? 
            <FloatingInput 
              labelName="Name"
              type="text"
              error={this.state.PincodeError}
              name="Name"
              handler={this.handleTextInput.bind(this)} 
            />
            : ''
           }
          { this.state.showForm ? 
            <FloatingInput 
              labelName="Full Address"
              type="text"
              error={this.state.PincodeError}
              name="Address"
              handler={this.handleTextInput.bind(this)} 
            />
            : ''
           }
          { this.state.showForm ? 
            <FloatingSelect 
              labelName="Connection Type"
              error={this.state.PincodeError}
              name="ConnectionType"
              handler={this.handleTextInput.bind(this)} 
            />
            : ''
           }
          <div className="group">
            <button onClick={this.ValidatePin.bind(this)} className="f_btn">Next</button>
          </div>
        </div>
      </div>
    );
  }
}
