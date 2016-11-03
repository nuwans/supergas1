import React from "react";
import {Link } from "react-router";
import Input from '../components/TextInput';
import Select from '../components/Select';
export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      phoneNumber:'4556565',
      modalIsOpen:true

    }
  } 
  handleChange(name,value){
    console.log(name);
    var temp={};
    temp[name]=value;
    this.setState(temp);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="content">
        <div className="form">
          <div className="f_label">Registerd Phone Number</div>
          <input type="number" className="f_input_default" ></input>
          <button  className="f_btn">PROCEED TO REFIL</button>    
        </div>
        <div className="model_w">
            <div className="m_w_content">
                <div className="m_w_label"> We have sent an OTP to</div>
                <div className="m_w_number"> {this.state.phoneNumber}</div>
                <input  type="text" className="mw_input"  placeholder="Enter OTP"></input>
                <div className="m_w_toolbar">
                    <button className="mw_button">CLOSE</button>
                    <button className="mw_button">VERIFY</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
