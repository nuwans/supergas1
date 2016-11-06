import React from "react";
import {Link , browserHistory } from "react-router";
import FloatingInput from '../components/FloatingInput';
import FloatingInputCenter from '../components/FloatingInputCenter';
import Select from '../components/Select';
export default class Register extends React.Component {

  constructor(props, context) {
    super(props, context)
    console.log(this.props)
    this.state = {
      PhoneNumber:'',
      dummyNumber:'1111',
      OTP:false,
      otp:''

    }
  } 
  handleChange(name,value){
    console.log(name);
    var temp={};
    temp[name]=value;
    this.setState(temp);
  }
  showOtp(){
    if(this.state.dummyNumber==this.state.PhoneNumber){
      this.confirmAndRoute();
    }else{
      this.setState({OTP:!this.state.OTP});
    }
  }
  confirmAndRoute(){
    if(this.state.otp==this.state.dummyNumber){
      this.setState({ OTP:false});
      this.props.router.push('/new');
    }
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
            <button onClick={this.showOtp.bind(this)}  className="f_btn">NEXT</button>
          </div>
        </div>
        {this.state.OTP ? 
          <div className="model_w">
              <div className="m_w_content">
                  <div className="m_w_label"> We have sent an OTP to</div>
                  <div className="m_w_number"> {this.state.PhoneNumber}</div>
                  <FloatingInputCenter 
                    labelName="Enter OTP"
                    type="text"
                    error={false}
                    name="otp"
                    handler={this.handleChange.bind(this)} 
                  />
                  <div className="m_w_toolbar">
                      <button onClick={this.showOtp.bind(this)} className="mw_button">CLOSE</button>
                      <button onClick={this.confirmAndRoute.bind(this)} className="mw_button">VERIFY</button>
                  </div>
              </div>
          </div>:''
          }
        
      </div>
    );
  }
}
