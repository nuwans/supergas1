import React from "react";
import {Link } from "react-router";
import Radio from '../components/Radio';
import FloatingInput from '../components/FloatingInput';
const ComplainOptions=[
    'Gas has not been delivered yet.',
    'I booked a new connection. I didn’t get any response yet.',
    'Cylinder I received is empty.',
    'Others'
];
export default class Complains extends React.Component {

  constructor(props, context) {
    super(props, context)
    console.log(this.props);
    console.log(this.state);
    this.state = {
      option:'',
      otherComplain:''
    }
  } 
  componentDidMount(){
      this.setState({option:ComplainOptions[0]});
  }
  getRadioOptions(){
      return ComplainOptions.map(function(item,i){
          var checked=false;
          if(this.state.option==item){
              checked=true;
          }
          return <Radio key={i} handler={this.handleRadioChange.bind(this)} value={item} name="option" checked={checked} > </Radio>
      }.bind(this)
      );
  }
  handleRadioChange(name,value){
      this.setState({option:value});
  }
  handleTextChange(name,value){
      var temp={};
      temp[name]=value;
      this.setState(temp);
  }
  render() {
    return (
      <div className="content">
        <div className="form">
          <div className="comp_title">What issue are you facing?</div>
          {this.getRadioOptions()}
          {this.state.option=='Others' ?
            <FloatingInput 
            labelName="Type Your Complaint"
            type="text"
            error={false}
            name="otherComplain"
            handler={this.handleTextChange.bind(this)} 
          /> :''
          }
          <div className="group">
            <button className="f_btn">REGISTER COMPLAINT</button>
          </div>
        </div>
      </div>
    );
  }
}
